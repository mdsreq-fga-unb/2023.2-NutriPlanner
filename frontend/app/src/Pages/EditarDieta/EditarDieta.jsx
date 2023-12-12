import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Componentes
import Logo from '../../components/Logo/Logo'
import MenuButton from '../../components/Buttons/Menu/MenuButton'
import Button from '../../components/Buttons/Button'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

//Ícones -- Menu
import dietaIcon from '../../assets/icons/Adição Dieta.svg';
import agendamento from '../../assets/icons/Agendamento.svg';
import treino from '../../assets/icons/Treino.svg';
import paciente from '../../assets/icons/Paciente.svg';
import adicaoPaciente from '../../assets/icons/Adição Paciente.svg';

//Ícones -- Botões
import ajuda from '../../assets/icons/Ajuda.svg';
import sair from '../../assets/icons/Sair.svg';
import salvar from '../../assets/icons/Salvar.svg';
import voltar from '../../assets/icons/Voltar.svg';

const EditarDieta = () =>{
    const navigate = useNavigate();

    const [dieta, setDieta] = useState({
        idPaciente: '',
        consumoChaAgua: '',
        vegetaisSugeridos: [],
        suplementacao: [],
        refeicoes: Array.from({ length: 8 }, () => ({
            alimento: []
        })),
        comentario: '',
    });

    const listaDeVegetais = [
        "Açafrão-da-terra",
        "Aipo",
        "Aipo-rábano",
        "Alcachofra",
        "Alface",
        "Alho",
        "Alho-poró",
        "Almeirão",
        "Aspargo",
        "Batata",
        "Batata-doce",
        "Berinjela",
        "Beterraba",
        "Brócolis",
        "Cambuci",
        "Cará",
        "Cebola",
        "Cenoura",
        "Cebolinha",
        "Chicória",
        "Cogumelo",
        "Cogumelo-de-paris",
        "Coentro",
        "Couve",
        "Couve-de-bruxelas",
        "Couve-flor",
        "Endívia",
        "Ervilha",
        "Espargos",
        "Espinafre",
        "Funcho",
        "Gengibre",
        "Hortelã",
        "Inhame",
        "Inhame-branco",
        "Jiló",
        "Lentilha",
        "Limão",
        "Manjericão",
        "Manjerona",
        "Milho",
        "Mandioca",
        "Mandioquinha-salsa",
        "Nabo",
        "Palmito",
        "Pepino",
        "Pimentão",
        "Pimentão-doce",
        "Quiabo",
        "Salsa",
        "Salsão",
        "Soja",
        "Tomate",
        "Tomate-cereja",
        "Tomate-grape",
      ];
      
    const [chaAgua, setChaAgua] = useState();  
    const [vegetalSelecionado, setVegetalSelecionado] = useState("");
    const [vegetal, setVegetal] = useState(null);
    const [alimento, setAlimento] = useState({ 
        nome: '',
        quantidade: '',
        proteinas: '',
        gorduras: '',
        carboidratos: '',
    });

    const [indexRefeicaoSelecionada, setIndexRefeicaoSelecionada] = useState(0);
    const [refeicaoSelecionada, setRefeicaoSelecionada] = useState(null)
    const refeicao = ["1","2","3","4","5","6","7","8"];
    const [refeicoesAdicionadas, setRefeicoesAdicionadas] = useState(Array.from({ length: 8 }, () => ({
        alimento: [{ 
            nome: '',
            quantidade: '',
            proteinas: '',
            gorduras: '',
            carboidratos: '',
        }]
    })),)
    const [suplemento, setSuplemento] = useState({
        nome: "", 
        quantidade: "",
    })

    function adicionaChaAgua(e){
        const consumo = e.target.value;
        
        setDieta((dieta) => ({
            ...dieta, 
            consumoChaAgua: consumo,
        }))
    }

    function adicionaComentario(e){
        const comentarioTexto = e.target.value;
        
        setDieta((dieta) => ({
            ...dieta, 
            comentario: comentarioTexto,
        }))
    }

    
    function adicionaVegetalSugerido(){
        if(vegetalSelecionado){
            setVegetal({
                nome: vegetalSelecionado,
              });
            setDieta((dietaAtual) => ({
                ...dietaAtual, 
                vegetaisSugeridos: [...dietaAtual.vegetaisSugeridos, vegetalSelecionado],
            }))
            setVegetalSelecionado('')
        }
        // console.log(dieta)
    }

    function removerVegetal(index) {
        const vegetaisSugeridosAtual = dieta.vegetaisSugeridos;
        vegetaisSugeridosAtual.splice(index, 1);
        
        setDieta({
          ...dieta,
          vegetaisSugeridos: vegetaisSugeridosAtual,
        });
    }
      
    const handleRefeicoesAlimentoAdd = () => {
        const indexRefeicao = Number(refeicaoSelecionada) - 1;

        if(refeicaoSelecionada && alimento.nome && alimento.quantidade){
            const refeicoes = [...dieta.refeicoes];
    
            refeicoes[indexRefeicao].alimento.push(alimento);
    
            setDieta({
                ...dieta,
                refeicoes,
            });
    
            console.log(dieta)
        } else if(!alimento.nome || !alimento.quantidade){
            alert("Por favor, preencha os campos: Nome do Alimento e Quantidade a ser consumida")
        
        }else if(!refeicaoSelecionada){
            alert("Escolha uma refeição para este alimento!")
        }
    };
        
    function removeAlimento(index){

        const refeicoes = [...dieta.refeicoes];
        refeicoes[index].alimento.splice(index, 1);

        setDieta({
            ...dieta,
            refeicoes,
        });

        console.log(dieta)
    }

    function adicionaSuplemento(){
        if(suplemento.nome && suplemento.quantidade){
            setDieta((dietaAtual) => ({
                ...dietaAtual, 
                suplementacao: [...dietaAtual.suplementacao, suplemento, ],
            }))

            console.log(dieta.suplementacao)
        }
    }

    function removeSuplemento(index) {
        const suplementoAtual = dieta.suplementacao;
        suplementoAtual.splice(index, 1);
        
        setDieta({
          ...dieta,
          suplementacao: suplementoAtual,
        });
    }

    
    function handleVoltar(){
        navigate('/verPaciente')
    }
    
    function handleAtualizarDieta(){
        console.log(dieta)

















    }

    return(
        <div className='CriarDieta'>    
            <div className="CadastroPaciente">
                <div className="CadastroPaciente-menu-lateral">
                    <Logo />
                    <span className="CadastroPaciente-menu-titulo">MENU</span>
                    <hr className="CadastroPaciente-menu-divisao" />
                    <nav className="CadastroPaciente-navegacao">
                        <a href="/" className='CadastroPaciente-item-menu'>
                            <MenuButton title="Pacientes" icon={paciente}/>
                        </a>
                        <a href="/" className='CadastroPaciente-item-menu'>
                            <MenuButton title="Cadastrar Paciente" icon={adicaoPaciente}/>
                        </a>
                        <a href="/" className='CadastroPaciente-item-menu'>
                            <MenuButton title="Criar Dieta" icon={dietaIcon} selecionado="true" />
                        </a>
                        <a href="/" className='CadastroPaciente-item-menu'>
                            <MenuButton title="Criar Plano de Treino" icon={treino}/>
                        </a>
                        <a href="/" className='CadastroPaciente-item-menu'>
                            <MenuButton title="Agendar Consulta" icon={agendamento} />
                        </a>
                    </nav>
                </div>
        
                <div className="CadastroPaciente-conteudo">
                    <div className="CadastroPaciente-cabecalho">
                        <div className='CadastroPaciente-items-cabecalho'>
                            <Header title="Editar Dieta" caminhoImagem={adicaoPaciente} />
                            <div className='CadastroPaciente-botoes-cabecalho'>
                            </div>
                        </div>
                        <hr className="CadastroPaciente-divisao-conteudo"></hr>
                        <Button title="Voltar" classeAdicional="CadastroPaciente-botao-voltar" onClick={(e) => handleVoltar(e)} icon={voltar}/>
                        <hr className="CadastroPaciente-divisao-conteudo"></hr>
                    </div>

                    <h2 className='CriarDieta-titulo2'>Vegetais Sugeridos</h2>
                    <div className='CriarDieta-vegetaisSugeridos'>
                        <div className='CriaDieta-vegetaisSugeridos-ladoEsquerdo'>
                            <select className="CriarDieta-caixaDeSelecao"
                            id="selecao"
                            value={vegetalSelecionado}
                            onChange={e => setVegetalSelecionado(e.target.value)}
                            required
                            >
                                <option value="" disabled selected>Selecione um vegetal</option>
                                {listaDeVegetais.map((vegetal, index) => (
                                    <option key={index} value={vegetal}>
                                        {vegetal}
                                    </option>
                                ))}
                            </select>
                            <button className="CriarDieta-adicionaBtn" onClick={adicionaVegetalSugerido}>Adicionar Vegetal</button>
                        </div>
                        
                        <div className='CriaDieta-vegetaisSugeridos-ladoDireito'>
                        {dieta.vegetaisSugeridos.map((vegetal, index) => (
                            <div key={index} className='CriaDieta-cardVegetal'>
                                <button className="CriarDieta-excluiItem" onClick={() => removerVegetal(index)}>x</button>
                                <p >{vegetal}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    <hr></hr>

                    <h2 className='CriarDieta-titulo2'>Plano Alimentar</h2>
                    <div className='CriaDieta-planoAlimentar'>
                        <div className='CriaDieta-areaAguaCha'>
                            <label className="CriarDieta-tituloSimples" htmlFor="chaAgua">Consumo de água/chá (em litros)</label>
                            <input 
                            className="CriatDieta-input" 
                            type="text" 
                            id="chaAgua" 
                            name="chaAgua"
                            value={dieta.consumoChaAgua}
                            onChange={e => adicionaChaAgua(e)}
                            required
                            />
                        </div>
                        
                        <h3>Refeições</h3>
                        <div className='CriaDieta-inputRefeicao'>
                            <div className='CriaDieta-areaAguaCha'>
                                <label className="CriarDieta-tituloSimples" htmlFor="nomeAlimento">Nome do Alimento:</label>
                                <input 
                                className="CriatDieta-input" 
                                type="text" 
                                id="nomeAlimento" 
                                name="nomeAlimento"
                                value={alimento.nome}
                                onChange={e => setAlimento({...alimento, nome: e.target.value})}
                                />
                                <label className="CriarDieta-tituloSimples" htmlFor="quantidadeAlimento">Quantidade a ser consumida:</label>
                                <input 
                                className="CriatDieta-input" 
                                type="text" 
                                id="quantidadeAlimento" 
                                name="quantidadeAlimento"
                                value={alimento.quantidade}
                                onChange={e => setAlimento({...alimento, quantidade: e.target.value})}
                                />
                                <label className="CriarDieta-tituloSimples" htmlFor="proteinaAlimento">Quantidade de proteinas: </label>
                                <input 
                                className="CriatDieta-input" 
                                type="text" 
                                id="proteinaAlimento" 
                                name="proteinaAlimento"
                                value={alimento.proteinas}
                                onChange={e => setAlimento({...alimento, proteinas: e.target.value})}
                                /> 
                                <label className="CriarDieta-tituloSimples" htmlFor="gorduraAlimento">Quantidade de gorduras: </label>
                                <input 
                                className="CriatDieta-input" 
                                type="text" 
                                id="gorduraAlimento" 
                                name="gorduraAlimento"
                                value={alimento.gorduras}
                                onChange={e => setAlimento({...alimento, gorduras: e.target.value})}
                                />
                            </div>
                            <div className='CriaDieta-areaAguaCha'>
                                
                                <label className="CriarDieta-tituloSimples" htmlFor="carboidratoAlimento">Quantidade de carboidratos: </label>
                                <input 
                                className="CriatDieta-input" 
                                type="text" 
                                id="carboidratoAlimento" 
                                name="carboidratoAlimento"
                                value={alimento.carboidratos}
                                onChange={e => setAlimento({...alimento, carboidratos: e.target.value})}
                                />

                                <label className="CriarDieta-tituloSimples" htmlFor="chaAgua">Refeição onde esse alimento deve ser adicionado: </label>
                                <select className="CriarDieta-caixaDeSelecao"
                                id="selecao"
                                value={refeicaoSelecionada}
                                onChange={(e) => setRefeicaoSelecionada(e.target.value)}
                                >
                                    <option value="" disabled selected>Selecione a refeição </option>
                                    {refeicao.map((item, indexRefeicao) => (
                                        <option key={() => item} value={item}>
                                            Refeição {indexRefeicao + 1}
                                        </option>
                                    ))}
                                </select>

                                <button className="CriarDieta-adicionaBtn" onClick={handleRefeicoesAlimentoAdd}>Adicionar Alimento</button>
                            </div>
                        </div>
                        
                        
                        
                        <div className='CriarDieta-areaRefeicoes'>
                            {dieta.refeicoes ? dieta.refeicoes.map((refeicao, indexRefeicao) => (
                                <div key={indexRefeicao} className='CriarDieta-cardRefeicao'>
                                    <p className='CriarDieta-tituloRefeicao'>Refeição {indexRefeicao + 1}</p>

                                    { dieta.refeicoes[indexRefeicao].alimento.map((alimento, indexAlimento) => (
                                        <div className='CriarDieta-alimentosRefeicao' key={indexAlimento}>
                                            <div> 
                                                <button className='CriarDieta-excluiItem' onClick={() => removeAlimento(indexAlimento)}>x</button>
                                                <p className='CriarDieta-cardAlimento'>{alimento.nome}</p>
                                                <p className='CriarDieta-cardAlimento'>{alimento.quantidade}</p>
                                            </div> 
                                            <div>
                                                <p className='CriarDieta-cardAlimento'>proteína: {alimento.proteinas}</p>
                                                <p className='CriarDieta-cardAlimento'>gorduras: {alimento.gorduras}</p>
                                                <p className='CriarDieta-cardAlimento'>carboidratos: {alimento.carboidratos}</p>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            )) : <></>}
                        </div>
                        <p>*Refeições vazias não serão exibidas na visualização do paciente</p>
                    </div>
                    <hr></hr>

                    <h2 className='CriarDieta-titulo2'>Suplementação</h2>
                    <div className='CriarDieta-suplementacao'>
                        <div className='CriarDieta-suplementacaoInputArea'>
                            <label className="CriarDieta-tituloSimples" htmlFor="nomeSuplemento">Nome:</label>
                            <input 
                                className="CriatDieta-input" 
                                type="text" 
                                id="nomeSuplemento" 
                                name="nomeSuplemento"
                                value={dieta.suplementacao.nome}
                                onChange={e => setSuplemento({...suplemento, nome: e.target.value})}
                                />
                            <label className="CriarDieta-tituloSimples" htmlFor="qtddSuplemento">Quantidade:</label>
                            <input 
                                className="CriatDieta-input" 
                                type="text" 
                                id="qtddSuplemento" 
                                name="qtddSuplemento"
                                value={dieta.suplementacao.quantidade}
                                onChange={e => setSuplemento({...suplemento, quantidade: e.target.value})}
                                />
                        </div>
                        <button className="CriarDieta-adicionaBtn" onClick={adicionaSuplemento}>Adicionar suplemento</button>

                        <div className='CriaDieta-vegetaisSugeridos-ladoDireito'>
                            {dieta.suplementacao ? dieta.suplementacao.map((suplemento, index) => (
                                <div key={index} className='CriaDieta-cardSuplemento'>
                                    <button className="CriarDieta-excluiItem" onClick={() => removeSuplemento(index)}>x</button>
                                    <p className='CriarDieta-suplemento'>{suplemento.quantidade}</p>
                                    <p className='CriarDieta-suplemento'>{suplemento.nome}</p>
                                </div>
                            )) : <></>}
                        </div>
                    </div>
                    <hr></hr>

                    <div className='CriaDieta-areaAguaCha'>
                        <label className="CriarDieta-tituloSimples" htmlFor="comentario">Comentários:</label>
                        <input 
                        className="CriatDieta-input" 
                        type="text" 
                        id="comentario" 
                        name="comentario"
                        value={dieta.comentario}
                        onChange={e => adicionaComentario(e)}
                        required
                        />
                    </div>


                    <div className='CriarDieta-areaBtnCadastrar'>
                        <button className='CriarDieta-btnCadastrar' onClick={handleAtualizarDieta}>Atualizar Dieta</button>
                    </div>
                </div>
                <Footer className="CadastroPaciente-rodape"/>
            </div>
        </div> 
    )    
};

export default EditarDieta

// Alterar critério de aceitação de lista de suplementação