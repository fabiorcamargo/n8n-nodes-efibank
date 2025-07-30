import EfiPay from 'sdk-node-apis-efi'
import getEfiBankConfig from '../../../../interfaces/credentials';
import { IExecuteFunctions } from 'n8n-workflow';

export async function pixListRecurrences(
  context: IExecuteFunctions,
  index: number,
): Promise<any> {
  try {
    const options = await getEfiBankConfig.call(context);
    const efipay = new EfiPay(options);
 
    const inicio = context.getNodeParameter('inicio', index) as string;
    const fim = context.getNodeParameter('fim', index) as string;
    
    // Parâmetros opcionais
    const cpf = context.getNodeParameter('cpf', index, '') as string;
    const cnpj = context.getNodeParameter('cnpj', index, '') as string;
    const status = context.getNodeParameter('status', index, '') as string;

    const params: any = { inicio, fim };
    
    if (cpf) params.cpf = cpf;
    if (cnpj) params.cnpj = cnpj;
    if (status) params.status = status;

    const resposta = await efipay.pixListRecurrences(params);
    return resposta;
  } catch (error: any) {

    let mensagemErro = error.message || error.mensagem || error.detail || "Ocorreu um erro desconhecido";
    
    if (typeof error === 'string') {
      mensagemErro = error;
    } 
    else if (error.error && error.error_description) {
      mensagemErro = `${error.error}: ${error.error_description}`;
    }
    else if (error.response && error.response.data) {
      if (typeof error.response.data === 'string') {
        try {
          const parsedData = JSON.parse(error.response.data);
          mensagemErro = parsedData.message || parsedData.mensagem || mensagemErro;
        } catch {
          mensagemErro = error.response.data;
        }
      } else {
        mensagemErro = error.response.data.message || error.response.data.mensagem || mensagemErro;
      }
    }

    if (mensagemErro.includes("sandbox") || mensagemErro.includes("certificate")) {
      throw new Error("Verifique o atributo sandbox e certificate, e garanta que eles estejam corretamente atribuídos para o ambiente desejado.");
    }

    if (error.violacoes && error.violacoes.length > 0) {
      const primeiraViolacao = error.violacoes[0];
      throw new Error(JSON.stringify({
        razao: primeiraViolacao.razao,
        propriedade: primeiraViolacao.propriedade
      }));
    }

    throw new Error(JSON.stringify({
      nome: error.nome || error.code || 'erro_desconhecido',
      mensagem: mensagemErro
    }));
  }
}

