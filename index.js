function validateIE(inscricaoEstadual, UF) {
    let soma, resto, peso, pesos, digitoVerificador, tamanho = inscricaoEstadual.length;
    switch (UF) {
        // Acre
        case 'AC':
            if (inscricaoEstadual.length == 13) {
                // Digitos verificadores
                let pesos = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
                let soma = 0;
                for (let i = 0; i < 11; i++) {
                    soma += +inscricaoEstadual[i] * pesos[i];
                }
                let modulo = soma % 11;
                let conferirPrimeiroDigito = 11 - modulo;

                // Confere o primeiro digito verificador
                if (conferirPrimeiroDigito == 1) {
                    var primeiroDigitoVerificador = 1;
                } else if (conferirPrimeiroDigito == 10 || conferirPrimeiroDigito == 11) {
                    var primeiroDigitoVerificador = 0;
                };

                pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
                soma = 0;
                for (let i = 0; i < 12; i++) {
                    soma += +inscricaoEstadual[i] * pesos[i];
                }

                modulo = soma % 11;
                let conferirSegundoDigito = 11 - modulo;

                if (conferirSegundoDigito == 10 || conferirSegundoDigito == 11) {
                    var segundoDigitoVerificador = 0;
                } else {
                    var segundoDigitoVerificador = conferirSegundoDigito;
                }

                if (primeiroDigitoVerificador == inscricaoEstadual[11] && segundoDigitoVerificador == inscricaoEstadual[12]) return true;
                else return false;

            } else return false;

        // Alagoas
        case 'AL':
            if (inscricaoEstadual.length == 9 && inscricaoEstadual.substring(0, 2) == '24') {
                if (inscricaoEstadual.substring(2, 3) == 0 || inscricaoEstadual.substring(2, 3) == 3 || inscricaoEstadual.substring(2, 3) == 5 || inscricaoEstadual.substring(2, 3) == 7 || inscricaoEstadual.substring(2, 3) == 8) {
                    let pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                    inscricaoEstadual.substring(2, 10);
                    let soma = 0;
                    for (let i = 0; i < 8; i++) {
                        soma += +inscricaoEstadual[i] * pesos[i];
                    }

                    let produto = soma * 10;
                    let resto = produto - Math.floor(produto / 11) * 11;

                    if (resto == 10) {
                        let digitoVerificador = 0;
                    } else {
                        let digitoVerificador = resto;
                    }

                    if (digitoVerificador == inscricaoEstadual[8]) return true
                    else return false;
                } else return false;
            } else return false;

        // Amapá
        case 'AP':
            if (inscricaoEstadual.substring(0, 2) == '03' && inscricaoEstadual.length == 9) {
                let numeros = inscricaoEstadual.substring(0, 8);
                let p = 0;
                let d = 0;
                if (+numeros >= 300001 && +numeros <= 3017000) {
                    p = 5;
                    d = 1;
                } else if (+numeros >= 3017001 && +numeros <= 3019022) {
                    p = 9;
                    d = 1;
                } else {
                    p = 0;
                    d = 0;
                }

                let pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                let soma = p;
                for (let i = 0; i < 8; i++) {
                    soma += +numeros[i] * pesos[i];
                }

                let resto = soma % 11;
                let digitoVerificador = 11 - resto;
                if (digitoVerificador == 10) {
                    digitoVerificador = 0
                } else if (digitoVerificador == 11) {
                    digitoVerificador = 'D';
                } else { }

                if (digitoVerificador == inscricaoEstadual[8]) return true;
                else return false;
            } else return false;

        // Amazonas
        case 'AM':
            //TODO
            if (inscricaoEstadual.length == 9) {
                return true
            } else return false;

        // Bahia
        case 'BA':
            if (inscricaoEstadual.length == 8 || inscricaoEstadual.length == 9) {
                // Se o número tiver 8 digitos
                if (inscricaoEstadual.length == 8) {
                    let primeiroDigito = inscricaoEstadual.substring(0, 1);
                    let modulo = 0
                    // Cálculo feito se o primeiro digito for igual a 1, 2, 3, 4, 5 ou 8
                    if (primeiroDigito == 0
                        || primeiroDigito == 1
                        || primeiroDigito == 2
                        || primeiroDigito == 3
                        || primeiroDigito == 4
                        || primeiroDigito == 5
                        || primeiroDigito == 8) modulo = 10;
                    else modulo = 11;

                    // Calulando o segundo digito verificador
                    let pesos = [7, 6, 5, 4, 3, 2];
                    let soma = 0;
                    for (let i = 0; i < pesos.length; i++) {
                        soma += +inscricaoEstadual[i] * pesos[i];
                    }

                    let resto = soma % modulo;
                    let segundoDigitoVerificador = modulo - resto;
                    if (resto == 0) segundoDigitoVerificador = 0;

                    // Calculando o primeiro digito verificador
                    pesos = [8, 7, 6, 5, 4, 3, 2];
                    let numeros = inscricaoEstadual.substring(0, 6) + inscricaoEstadual.substring(7, 8);
                    soma = 0;
                    for (let i = 0; i < pesos.length; i++) {
                        soma += numeros[i] * pesos[i];
                    }
                    let primeiroDigitoVerificador = modulo - (soma % modulo);

                    // Conferindo se os números são iguais
                    if (primeiroDigitoVerificador == inscricaoEstadual[6] && segundoDigitoVerificador == inscricaoEstadual[7]) return true;
                    else return false;
                }

                // Se o número tiver 9 digitos
                else {
                    // Calculando o segundo digito verificador
                    let modulo = 10
                    let primeiroNumero = inscricaoEstadual.substring(0, 1);
                    if (primeiroNumero == 6 || primeiroNumero == 7 || primeiroNumero == 9) modulo = 11;

                    let numeros = inscricaoEstadual.substring(0, 7);
                    let pesos = [8, 7, 6, 5, 4, 3, 2];
                    let soma = 0;
                    for (let i = 0; i < pesos.length; i++) {
                        soma += +numeros[i] * pesos[i];
                    }

                    let resto = soma % modulo
                    let segundoDigitoVerificador = modulo - resto;
                    if (resto == 0) segundoDigitoVerificador = 0;

                    // Calculando o primeiro digito verificador
                    numeros = inscricaoEstadual.substring(0, 7) + inscricaoEstadual.substring(8, 9);
                    pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                    soma = 0;
                    for (let i = 0; i < pesos.length; i++) {
                        soma += numeros[i] * pesos[i];
                    }

                    let primeiroDigitoVerificador = soma % modulo

                    // Conferindo se os digitos são iguais
                    if (primeiroDigitoVerificador == inscricaoEstadual.substring(7, 8) && segundoDigitoVerificador == inscricaoEstadual.substring(8, 9)) return true;
                    else return false;
                }
            } else return false;

        // Ceará
        case 'CE':
            if (inscricaoEstadual.length == 9) {
                let numeros = inscricaoEstadual.substring(0, 8);
                let pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                let soma = 0
                for (let i = 0; i < pesos.length; i++) {
                    soma += +numeros[i] * pesos[i];
                }

                let resto = soma % 11;

                console.log(soma, resto);

                let digitoVerificador = 0
                if (resto != 10 || resto != 11) digitoVerificador = 11 - resto;
                if (inscricaoEstadual[8] == digitoVerificador) return true;
                else return false;

            } else return false;

        // Destrito Federal
        case 'DF':
            if (inscricaoEstadual.length == 13) {
                // Calculando o primeiro digito verificador
                let numeros = inscricaoEstadual.substring(0, 11)
                let pesos = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
                let soma = 0
                for (let i = 0; i < pesos.length; i++) {
                    soma += +numeros[i] * pesos[i];
                }
                let resto = soma % 11;
                let primeiroDigitoVerificador = 11 - resto
                if (primeiroDigitoVerificador == 10 || primeiroDigitoVerificador == 11) primeiroDigitoVerificador = 0;
            } else return false;
            break;

        // Espirito Santo
        case 'ES':
            if (inscricaoEstadual.length == 9) {
                // Calcula o digito verificador
                let numeros = inscricaoEstadual.substring(0, 8);
                let pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                let soma = 0
                for (let i = 0; i < 8; i++) {
                    soma += +numeros[i] * pesos[i];
                }
                let resto = soma % 11;
                let digitoVerificador = 0
                if (resto >= 2) digitoVerificador = 11 - resto;

                // Confere o digito verificador
                if (inscricaoEstadual[8] == digitoVerificador) return true;
                else return false;

            } else return false;

        // Goiás
        case 'GO':
            if (inscricaoEstadual.length == 9) {
                let primeirosDigitos = inscricaoEstadual.substring(0, 2);
                if (primeirosDigitos == 10
                    || primeirosDigitos == 11
                    || primeirosDigitos == 15) {
                    let numeros = inscricaoEstadual.substring(0, 8);
                    let pesos = [9, 8, 7, 6, 5, 4, 3, 2]
                    let soma = 0;
                    for (let i = 0; i < pesos.length; i++) {
                        soma += numeros[i] * pesos[i];
                    }

                    let resto = soma % 11
                    if (numeros == '11094402') {
                        //TODO
                    }

                    let digitoVerificador;

                    if (resto == 0) digitoVerificador = 0;
                    else if (resto == 1 && numeros >= 10103105 && numeros <= 10119997) digitoVerificador = 1;
                    else if (resto == 1) digitoVerificador = 0;
                    else digitoVerificador = 11 - resto;

                    // Conferindo os digitos verificadores
                    if (inscricaoEstadual[8] == digitoVerificador) return true;
                    else return false;

                } else return false
            } else return false;

        // Maranhão
        case 'MA':
            if (inscricaoEstadual.length == 9 && inscricaoEstadual.substring(0, 2) == '12') {
                // Calculando o vlaor do digito verificador
                let numeros = inscricaoEstadual.substring(0, 8);
                let pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                let soma = 0
                for (let i = 0; i < pesos.length; i++) {
                    soma += +numeros[i] * pesos[i];
                }

                let resto = soma % 11

                let digitoVerificador;
                if (resto == 0 || resto == 1) digitoVerificador = 0;
                else digitoVerificador = 11 - resto;

                if (digitoVerificador == inscricaoEstadual[8]) return true;
                else return false;
            } else return false;

        // Mato Grosso
        case 'MT':
            if (inscricaoEstadual.length == 11) {
                // Calcula o digito verificador
                let numeros = inscricaoEstadual.substring(0, 10);
                let pesos = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
                let soma = 0;
                for (let i = 0; i < pesos.length; i++) {
                    soma += +numeros[i] * pesos[i]
                }

                let resto = soma % 11;
                if (resto == 0 || resto == 1) digitoVerificador = 0
                else digitoVerificador = 11 - resto;

                // Confere o digito verificador
                if (inscricaoEstadual[10] == digitoVerificador) return true;
                else return false;
            } else return false;

        // Mato Grosso do Sul
        case 'MS':
            if (inscricaoEstadual.length == 9 && inscricaoEstadual.substring(0, 2) == '28') {
                // Calcula o digito verificador
                let numeros = inscricaoEstadual.substring(0, 8);
                let pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                let soma = 0;
                for (let i = 0; i < pesos.length; i++) {
                    soma += numeros[i] * pesos[i]
                }

                let resto = soma % 11;

                let digitoVerificador = 0;
                if (resto == 0) { }

                let t = 11 - resto
                if (t > 9) digitoVerificador = 0;
                else digitoVerificador = t;

                // Confere o digito verificador
                if (inscricaoEstadual[8] == digitoVerificador) return true;
                else return false;
            } else return false;

        // Minas Gerais
        case 'MG':
            if (inscricaoEstadual.length == 13) {
                // Calculando o primeiro digito verificador
                let numeros = `${inscricaoEstadual.substring(0, 3)}0${inscricaoEstadual.substring(3, 12)}`;
                let pesos = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
                let lista = []
                for (let i = 0; i < pesos.length; i++) {
                    let numero = '' + (+numeros[i] * pesos[i]);
                    numero = numero.split('');
                    for (let n of numero) {
                        lista.push(n);
                    }
                }

                let total = lista.reduce((total, next) => parseInt(total) + parseInt(next));

                let dezena = total
                while (true) {
                    if (dezena % 10 == 0) {
                        break;
                    } else dezena++;
                }

                let primeiroDigitoVerificador = dezena - total;

                // Calculando o segundo digito verificador
                numeros = inscricaoEstadual.substring(0, 12)
                pesos = [3, 2, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
                let soma = 0;

                for (let i = 0; i < pesos.length; i++) {
                    soma += numeros[i] * pesos[i]
                }

                let resto = 11 - (soma % 11);
                let segundoDigitoVerificador = resto

                // Comparando com o digito verificador
                if (inscricaoEstadual[11] == primeiroDigitoVerificador && inscricaoEstadual[12] == segundoDigitoVerificador) return true;
                else return false;
            } else return false;

        // Pará
        case 'PA':
            if (inscricaoEstadual.length == 9 && inscricaoEstadual.substring(0, 2) == '15') {
                // Calculando o digito verificador
                let numeros = inscricaoEstadual.substring(0, 8);
                let pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                let soma = 0;
                for (let i = 0; i < pesos.length; i++) {
                    soma += numeros[i] * pesos[i];
                }

                // Comparando o digito verificador
                let resto = soma % 11;
                if (resto == 0 || resto == 1) digitoVerificador = 0;
                else digitoVerificador = 11 - resto

                if (inscricaoEstadual[8] == digitoVerificador) return true;
                else return false;
            } else return false;

        // Paraíba
        case 'PB':
            if (inscricaoEstadual.length == 9) {
                // Calculando o digito verificador
                let numeros = inscricaoEstadual.substring(0, 8)
                let pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                let soma = 0;
                for (let i = 0; i < pesos.length; i++) {
                    soma += +numeros[i] * pesos[i];
                }

                let resto = 11 - (soma % 11);
                if (resto == 11 || resto == 10) digitoVerificador = 0;
                else digitoVerificador = resto;

                // Comparando o digito verificador
                if (inscricaoEstadual[8] == digitoVerificador) return true
                else return false;
            } else return false;

        // Paraná
        case 'PR':
            if (inscricaoEstadual.length == 10) {
                // Calculando o primeiro digito verificador
                let numeros = inscricaoEstadual.substring(0, 8);
                let pesos = [3, 2, 7, 6, 5, 4, 3, 2];
                let soma = 0;
                for (let i = 0; i < pesos.length; i++) {
                    soma += +numeros[i] * pesos[i];
                }

                let resto = 11 - (soma % 11);
                let primeiroDigitoVerificador
                if (resto == 10 || resto == 11) primeiroDigitoVerificador = 0;
                else primeiroDigitoVerificador = resto;

                // Calculando o segundo digito verificador
                numeros += primeiroDigitoVerificador;
                pesos = [4, 3, 2, 7, 6, 5, 4, 3, 2];
                soma = 0;
                for (let i = 0; i < pesos.length; i++) {
                    soma += +numeros[i] * pesos[i];
                }
                resto = 11 - (soma % 11);
                let segundoDigitoVerificador;
                if (resto == 10 || resto == 11) segundoDigitoVerificador = 0;
                else segundoDigitoVerificador = resto;

                // Comparando os digitos verificadores
                if (primeiroDigitoVerificador == inscricaoEstadual[8] && segundoDigitoVerificador == inscricaoEstadual[9]) return true;
                else return false;
            } else return false;

        // Pernambuco
        case 'PE':
            if (inscricaoEstadual.length == 9) {
                let numeros = inscricaoEstadual.substring(0, 7);
                let pesos = [8, 7, 6, 5, 4, 3, 2];
                let soma = 0;
                for (let i = 0; i < pesos.length; i++) {
                    soma += +numeros[i] * pesos[i];
                }

                let resto = soma % 11;
                if (resto == 1 || resto == 0) primeiroDigitoVerificador = 0;
                else primeiroDigitoVerificador = 11 - resto;

                numeros += primeiroDigitoVerificador;
                pesos = [9, 8, 7, 6, 5, 4, 3, 2];
                soma = 0;
                for (let i = 0; i < pesos.length; i++) {
                    soma += +numeros[i] * pesos[i];
                }
                resto = 11 - (soma % 11);
                let segundoDigitoVerificador;
                if (resto == 10 || resto == 11) segundoDigitoVerificador = 0;
                else segundoDigitoVerificador = resto;
                if (primeiroDigitoVerificador == inscricaoEstadual[7] && segundoDigitoVerificador == inscricaoEstadual[8]) return true;
                else return false;

            } else return false;

        // Santa Catarina
        case 'SC':
            if (tamanho !== 9) return false;
            soma = 0
            peso = [9, 8, 7, 6, 5, 4, 3, 2];
            for (let i = 0; i < 8; i++) {
                soma += inscricaoEstadual[i] * peso[i];
            }

            resto = soma % 11;

            digitoVerificador = 11 - resto;

            if (resto == 0 || resto == 1) digitoVerificador = 0;

            if (digitoVerificador != inscricaoEstadual[8]) return false;
            
            return inscricaoEstadual;

        // São Paulo
        case 'SP':
            if (tamanho !== 12) return false;
            // PRIMEIRA VERIFICAÇÃO
            pesos = [1, 3, 4, 5, 6, 7, 8, 10];
            soma = 0
            for (let i = 0; i < 8; i++) {
                soma += inscricaoEstadual[i] * pesos[i];
            }

            digitoVerificador = resto = soma % 11;
            if (resto >= 10) digitoVerificador = 0;
            if (digitoVerificador != inscricaoEstadual[8]) return false;

            // SEGUNDA VERIFICAÇÃO
            pesos = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
            soma = 0;
            for (let i = 0; i < 11; i++) {
                soma += inscricaoEstadual[i] * pesos[i];
            }

            digitoVerificador = resto = soma % 11;
            if (digitoVerificador != inscricaoEstadual[11]) return false;

            return inscricaoEstadual;

        // Padrão
        default:
            return inscricaoEstadual;
    }
}

const formatIE = (ie, uf) => {
    switch (uf) {
        // Acre
        case 'AC':
            return `${ie.substring(0, 2)}.${ie.substring(2, 5)}.${ie.substring(5, 8)}/${ie.substring(8, 11)}-${ie.substring(11, 13)}`;

        // Alagoas
        case 'AL':
            return ie;

        // Amazonas
        case 'AM':
            return `${ie.substring(0, 2)}.${ie.substring(2, 5)}.${ie.substring(5, 8)}-${ie.substring(8, 9)}`;

        // Bahia
        case 'BA':
            if (ie.length == 8) return `${ie.substring(0, 6)}-${ie.substring(6, 8)}`;
            else return `${ie.substring(0, 7)}-${ie.substring(7, 9)}`;

        // Ceará
        case 'CE':
            return `${ie.substring(0, 8)}-${ie.substring(8, 9)}`

        // Destrito Federal
        case 'DF':
            return `${ie.substring(0, 11)}-${ie.substring(11, 13)}`

        // Espirito Santo
        case 'ES':
            return `${ie.substring(0, 8)}-${ie.substring(8, 9)}`;

        // Goiás
        case 'GO':
            return `${ie.substring(0, 2)}.${ie.substring(2, 5)}.${ie.substring(5, 8)}-${ie.substring(8, 9)}`;

        // Maranhão
        case 'MA':
            return `${ie.substring(0, 8)}-${ie.substring(8, 9)}`;

        // Mato-Grosso
        case 'MT':
            return `${ie.substring(0, 10)}-${ie.substring(10, 11)}`

        // Mato Grosso do Sul
        case 'MS':
            return `${ie.substring(0, 8)}-${ie.substring(8, 9)}`;

        // Minas Gerais
        case 'MG':
            return `${ie.substring(0, 3)}.${ie.substring(3, 6)}.${ie.substring(6, 9)}/${ie.substring(9, 13)}`;

        // Pará
        case 'PA':
            return `${ie.substring(0, 2)}-${ie.substring(2, 8)}-${ie.substring(8, 9)}`;

        // Paraíba
        case 'PB':
            return `${ie.substring(0, 8)}-${ie.substring(8, 9)}`;

        // Paraná
        case 'PR':
            return `${ie.substring(0, 3)}.${ie.substring(3, 8)}-${ie.substring(8, 10)}`

        // Pernambuco
        case 'PE':
            return `${ie.substring(0, 7)}-${ie.substring(7, 9)}`;

        // São Paulo
        case 'SP':
            return `${ie.substring(0, 3)}.${ie.substring(3, 6)}.${ie.substring(6, 9)}.${ie.substring(9, 12)}`;

        case 'SC':
            return `${ie.substring(0, 3)}.${ie.substring(3, 6)}.${ie.substring(6, 9)}`;

        // Padrão
        default:
            return ie;
    }
}

const validateAndFormatIE = (ie, uf) => {
    if (validateIE(ie, uf)) {
        return formatIE(ie, uf);
    } else {
        return false;
    }
}

console.log(validateAndFormatIE('311361220', 'SC'));