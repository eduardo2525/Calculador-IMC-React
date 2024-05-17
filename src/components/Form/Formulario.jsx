import { useState } from 'react';
import styles from './Form.module.css';

function Formulario() {
    
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [imc, setImc] = useState();
    const [mensagem, setMensagem] = useState();

    function alturaAtual(event) {
        setAltura(event.target.value);
    }

    function pesoAtual(event) {
        setPeso(event.target.value);
    }

    const calcular = () => {
        const imc = peso / (altura  * altura);
        const imcFormatado = imc.toFixed(2);
        setImc(imcFormatado);
        setMensagem(obterMensagemImc(imc))
    }

    const clear = () => {
        setAltura('');
        setPeso('');
    }

    const obterMensagemImc = (imc) => {
        if (imc < 18.5) {
            return 'Você está abaixo do peso.';
        }else if (imc >= 18.5 && imc < 24.9) {
            return 'Você está com peso normal.'
        }else if (imc>= 25 && imc < 29.9) {
            return 'Você está com sobrepeso.';
        }else if (imc >= 30 && imc < 34.9) {
            return 'Você está com obesidade grau 1.';
        } else if (imc >= 35 && imc < 39.9) {
            return 'Você está com obesidade grau 2.';
        } else {
            return 'Você está com obesidade grau 3.';
        }
    }

    return(
        <form>
            <div className={styles.form__container}>
                <label htmlFor="altura">Altura:</label>
                <input id='altura' type="number" placeholder="Ex:1,75"
                value={altura}
                onChange={alturaAtual}
                />
            </div>
            <div className={styles.form__container}>
                <label htmlFor="peso">Peso:</label>
                <input id='peso' type="number" placeholder="Ex:75Kg"
                value={peso}
                onChange={pesoAtual}
                />
            </div>
            <div className={styles.buttons}>
            <button
            className={styles.button}
            onClick={(e) => {
                e.preventDefault();
                calcular()
            }}
            >Calcular</button>
            <button
            className={styles.clear}
            onClick={() => {
                clear()
            }}
            >Clear</button>
            </div>
            {imc && (
                <div>
                    <p className={styles.mensagem}>Seu IMC é: {imc}</p>
                    <p className={styles.mensagem}>{mensagem}</p>
                </div>
            )}
        </form>
    )
}

export default Formulario;