import { Container, Content, CalendarTitle, Weeks, Days, Button, ButtonContent, ContentDoMesAnoEButton, ContentDoMesEAno, ContentDoAno } from './styles';
import { useState, useEffect, useRef, } from 'react';

export const Calendar = () => {

    let dataAtual = new Date();
    const diaAtual = new Date().getDate();

    const [mesAtualNumero, setMesAtualNumero] = useState(dataAtual.getMonth());
    const [anoAtual, setAnoAtual] = useState(dataAtual.getFullYear());
    const [numeroClicado, setNumeroClicado] = useState<string | number | null>(null);
    const calendarRef = useRef<HTMLDivElement>(null); // Definindo o tipo da referência para um elemento HTMLDivElement

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                setNumeroClicado(null); // Define a seleção como null ao clicar fora do calendário
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);


    //pegando o mes atual escrito
    const months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let mesAtualEscrita = months[mesAtualNumero];

    // Pegando o primeiro dia da semana do mês
    let primeiroDiaDoMes = new Date(anoAtual, mesAtualNumero, 0).getDay();

    // Pegando o último dia do mês
    let ultimoDadoDoMes = new Date(anoAtual, mesAtualNumero + 1, 0).getDate();

    // Pegando o último dia do mês anterior
    let ultimoDiaDoMesAnterior = new Date(anoAtual, mesAtualNumero, 0).getDate();

    let diaDoMes = [];

    //preenchendo os ultimos dias do mes anterior no mes atual
    for (let i = primeiroDiaDoMes - 1; i >= 0; i--) {
        diaDoMes.push(
            <li className="inactive" key={`prev_${ultimoDiaDoMesAnterior - i}`}>
                {ultimoDiaDoMesAnterior - i}
            </li>
        );
    }

    //preenchendo os dias do mes atual
    for (let i = 1; i <= ultimoDadoDoMes; i++) {
        const classes = i === diaAtual ? 'current-day' : '';
        diaDoMes.push(<li key={i} className={classes}>{i}</li>);
    }
    const diasRestantes = 6 * 7 - diaDoMes.length

    //preenchendo os primeiros dias do mes seguinte no mes atual
    for (let i = 1; i <= diasRestantes; i++) {
        diaDoMes.push(
            <li className="inactive" key={`next_${i}`}>
                {i}
            </li>
        );
    }
    const handleClick = (numero: string | number) => {
        setNumeroClicado(numero);
    };



    // Função para avançar para o próximo mês
    const proximo = () => {

        if (mesAtualNumero === 11) { // Verifica se é dezembro (12)
            setMesAtualNumero(0); // Se for dezembro, avançamos para janeiro (0)
            setAnoAtual((prevAno) => prevAno + 1); // Aumentamos um ano
        } else {
            setMesAtualNumero((prevMes) => prevMes + 1); // Caso contrário, apenas avançamos um mês
        }
    }

    const anterior = () => {

        if (mesAtualNumero === 0) {
            setMesAtualNumero(11); // Se for janeiro, voltamos para dezembro
            setAnoAtual((prevAno) => prevAno - 1); // Diminuímos um ano
        } else {
            setMesAtualNumero((prevMes) => prevMes - 1); // Caso contrário, apenas voltamos um mês
        }
    };


    return (
        <>
            <Container>
                <Content>
                    <CalendarTitle>
                        {/* mes e ano + seta de avancar e voltar o mes */}
                        <ContentDoMesAnoEButton>

                            <ContentDoMesEAno>
                                {mesAtualEscrita}


                                <ContentDoAno>
                                    {anoAtual}
                                </ContentDoAno>
                            </ContentDoMesEAno>

                            <ButtonContent>
                                <Button onClick={proximo}> 🔼</Button>
                                <Button onClick={anterior}> 🔽 </Button>
                            </ButtonContent>


                        </ContentDoMesAnoEButton>



                    </CalendarTitle>

                    <Weeks>
                        <ul>
                            <li>Seg</li>
                            <li>Ter</li>
                            <li>Qua</li>
                            <li>Qui</li>
                            <li>Sex</li>
                            <li>Sab</li>
                            <li>Dom</li>
                        </ul>
                    </Weeks>
                    <Days ref={calendarRef}>
                        <ul>

                            {diaDoMes.map((dia, index) => (
                                <li
                                    key={String(dia.key !== null ? dia.key : index)} // Convertendo para string ou usando o índice como chave padrão
                                    className={dia.props.className + (numeroClicado === dia.key ? ' clicked' : '')}
                                    onClick={() => handleClick(dia.key !== null ? dia.key : '')} // Verificando se dia.key é nulo
                                >
                                    {dia.props.children}
                                </li>

                            ))}
                        </ul>


                    </Days>

                </Content>

            </Container>
        </>
    )
}