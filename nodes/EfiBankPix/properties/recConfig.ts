import { INodeProperties } from 'n8n-workflow';

export const recConfig: INodeProperties[] = [
  // idRec para endpoints que necessitam
  {
    displayName: 'ID da Recorrência',
    name: 'idRec',
    type: 'string',
    default: '',
    description: 'Insira o ID da recorrência',
    displayOptions: {
      show: {
        endpoints: [
          'pixDetailRecurrence',
          'pixUpdateRecurrence'
        ],
      },
    },
  },

  // Parâmetros para listar recorrências
  {
    displayName: 'Data Início',
    name: 'inicio',
    type: 'string',
    default: '2025-01-01T00:00:00Z',
    required: true,
    description: 'Data início para o filtro da consulta (formato: YYYY-MM-DDTHH:mm:ssZ)',
    displayOptions: {
      show: {
        endpoints: ['pixListRecurrences'],
      },
    },
  },

  {
    displayName: 'Data Fim',
    name: 'fim',
    type: 'string',
    default: '2025-12-31T23:59:59Z',
    required: true,
    description: 'Data fim para o filtro da consulta (formato: YYYY-MM-DDTHH:mm:ssZ)',
    displayOptions: {
      show: {
        endpoints: ['pixListRecurrences'],
      },
    },
  },

  {
    displayName: 'CPF',
    name: 'cpf',
    type: 'string',
    default: '',
    description: 'CPF do pagador para filtrar a consulta (opcional)',
    displayOptions: {
      show: {
        endpoints: ['pixListRecurrences'],
      },
    },
  },

  {
    displayName: 'CNPJ',
    name: 'cnpj',
    type: 'string',
    default: '',
    description: 'CNPJ do pagador para filtrar a consulta (opcional)',
    displayOptions: {
      show: {
        endpoints: ['pixListRecurrences'],
      },
    },
  },

  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
    options: [
      { name: 'Ativa', value: 'ATIVA' },
      { name: 'Inativa', value: 'INATIVA' },
      { name: 'Cancelada', value: 'CANCELADA' },
    ],
    default: '',
    description: 'Status da recorrência para filtrar a consulta (opcional)',
    displayOptions: {
      show: {
        endpoints: ['pixListRecurrences'],
      },
    },
  },

  // Body para criar recorrência
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixCreateRecurrence',
    type: 'json',
    default: `{
  "pagador": {
    "cpf": "12345678909",
    "nome": "João Silva"
  },
  "recebedor": {
    "chave": "71cdf9ba-c695-4e3c-b010-abb521a3f1be"
  },
  "valor": {
    "original": "100.00"
  },
  "configuracao": {
    "descricao": "Mensalidade do serviço",
    "periodicidade": "MENSAL",
    "dataInicio": "2025-02-01",
    "quantidade": 12
  }
}`,
    description: 'Insira o body da requisição para criar uma recorrência de PIX automático',
    displayOptions: {
      show: {
        endpoints: ['pixCreateRecurrence'],
      },
    },
  },

  // Body para revisar recorrência
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixUpdateRecurrence',
    type: 'json',
    default: `{
  "status": "INATIVA",
  "configuracao": {
    "descricao": "Mensalidade do serviço - Atualizada"
  }
}`,
    description: 'Insira o body da requisição para revisar uma recorrência de PIX automático',
    displayOptions: {
      show: {
        endpoints: ['pixUpdateRecurrence'],
      },
    },
  },

  // idSolicRec para endpoints de solicitação
  {
    displayName: 'ID da Solicitação de Recorrência',
    name: 'idSolicRec',
    type: 'string',
    default: '',
    description: 'Insira o ID da solicitação de recorrência',
    displayOptions: {
      show: {
        endpoints: [
          'pixDetailRecurrenceRequest',
          'pixUpdateRecurrenceRequest'
        ],
      },
    },
  },

  // Body para criar solicitação de recorrência
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixCreateRecurrenceRequest',
    type: 'json',
    default: `{
  "pagador": {
    "cpf": "12345678909",
    "nome": "João Silva"
  },
  "recebedor": {
    "chave": "71cdf9ba-c695-4e3c-b010-abb521a3f1be"
  },
  "valor": {
    "original": "100.00"
  },
  "configuracao": {
    "descricao": "Mensalidade do serviço",
    "periodicidade": "MENSAL",
    "dataInicio": "2025-02-01",
    "quantidade": 12
  }
}`,
    description: 'Insira o body da requisição para criar uma solicitação de confirmação de recorrência',
    displayOptions: {
      show: {
        endpoints: ['pixCreateRecurrenceRequest'],
      },
    },
  },

  // Body para revisar solicitação de recorrência
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixUpdateRecurrenceRequest',
    type: 'json',
    default: `{
  "status": "CONFIRMADA"
}`,
    description: 'Insira o body da requisição para revisar uma solicitação de confirmação de recorrência',
    displayOptions: {
      show: {
        endpoints: ['pixUpdateRecurrenceRequest'],
      },
    },
  },

  // Parâmetros para cobranças automáticas
  {
    displayName: 'txid',
    name: 'txid',
    type: 'string',
    default: '',
    description: 'Insira o txid da cobrança automática',
    displayOptions: {
      show: {
        endpoints: [
          'pixCreateAutoCharge',
          'pixUpdateAutoCharge',
          'pixDetailAutoCharge',
          'pixRetryAutoCharge'
        ],
      },
    },
  },

  {
    displayName: 'Data para Retentativa',
    name: 'data',
    type: 'string',
    default: '',
    description: 'Data para retentativa no formato YYYY-MM-DD',
    displayOptions: {
      show: {
        endpoints: ['pixRetryAutoCharge'],
      },
    },
  },

  // Parâmetros para listar cobranças automáticas
  {
    displayName: 'Data Início',
    name: 'inicio',
    type: 'string',
    default: '2025-01-01T00:00:00Z',
    required: true,
    description: 'Data início para o filtro da consulta (formato: YYYY-MM-DDTHH:mm:ssZ)',
    displayOptions: {
      show: {
        endpoints: ['pixListAutoCharges'],
      },
    },
  },

  {
    displayName: 'Data Fim',
    name: 'fim',
    type: 'string',
    default: '2025-12-31T23:59:59Z',
    required: true,
    description: 'Data fim para o filtro da consulta (formato: YYYY-MM-DDTHH:mm:ssZ)',
    displayOptions: {
      show: {
        endpoints: ['pixListAutoCharges'],
      },
    },
  },

  {
    displayName: 'ID da Recorrência',
    name: 'idRec',
    type: 'string',
    default: '',
    description: 'ID da recorrência para filtrar cobranças (opcional)',
    displayOptions: {
      show: {
        endpoints: ['pixListAutoCharges'],
      },
    },
  },

  {
    displayName: 'CPF',
    name: 'cpf',
    type: 'string',
    default: '',
    description: 'CPF do pagador para filtrar a consulta (opcional)',
    displayOptions: {
      show: {
        endpoints: ['pixListAutoCharges'],
      },
    },
  },

  {
    displayName: 'CNPJ',
    name: 'cnpj',
    type: 'string',
    default: '',
    description: 'CNPJ do pagador para filtrar a consulta (opcional)',
    displayOptions: {
      show: {
        endpoints: ['pixListAutoCharges'],
      },
    },
  },

  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
    options: [
      { name: 'Ativa', value: 'ATIVA' },
      { name: 'Concluída', value: 'CONCLUIDA' },
      { name: 'Removida pelo usuário recebedor', value: 'REMOVIDA_PELO_USUARIO_RECEBEDOR' },
      { name: 'Removida pelo PSP', value: 'REMOVIDA_PELO_PSP' },
    ],
    default: '',
    description: 'Status da cobrança para filtrar a consulta (opcional)',
    displayOptions: {
      show: {
        endpoints: ['pixListAutoCharges'],
      },
    },
  },

  {
    displayName: 'Convênio',
    name: 'convenio',
    type: 'string',
    default: '',
    description: 'Convênio para filtrar a consulta (opcional)',
    displayOptions: {
      show: {
        endpoints: ['pixListAutoCharges'],
      },
    },
  },

  // Bodies para cobranças automáticas
  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixCreateAutoCharge',
    type: 'json',
    default: `{
  "calendario": {
    "dataDeVencimento": "2025-02-15",
    "validadeAposVencimento": 30
  },
  "devedor": {
    "cpf": "12345678909",
    "nome": "João Silva"
  },
  "valor": {
    "original": "100.00"
  },
  "chave": "71cdf9ba-c695-4e3c-b010-abb521a3f1be",
  "solicitacaoPagador": "Pagamento automático - Mensalidade"
}`,
    description: 'Insira o body da requisição para criar uma cobrança de PIX automático com txid',
    displayOptions: {
      show: {
        endpoints: ['pixCreateAutoCharge'],
      },
    },
  },

  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixCreateAutoChargeImmediate',
    type: 'json',
    default: `{
  "calendario": {
    "dataDeVencimento": "2025-02-15",
    "validadeAposVencimento": 30
  },
  "devedor": {
    "cpf": "12345678909",
    "nome": "João Silva"
  },
  "valor": {
    "original": "100.00"
  },
  "chave": "71cdf9ba-c695-4e3c-b010-abb521a3f1be",
  "solicitacaoPagador": "Pagamento automático - Mensalidade"
}`,
    description: 'Insira o body da requisição para criar uma cobrança de PIX automático sem txid',
    displayOptions: {
      show: {
        endpoints: ['pixCreateAutoChargeImmediate'],
      },
    },
  },

  {
    displayName: 'Body da Requisição',
    name: 'requestBodyPixUpdateAutoCharge',
    type: 'json',
    default: `{
  "devedor": {
    "cpf": "12345678909",
    "nome": "João Silva Santos"
  },
  "valor": {
    "original": "150.00"
  },
  "solicitacaoPagador": "Pagamento automático - Mensalidade atualizada"
}`,
    description: 'Insira o body da requisição para revisar uma cobrança de PIX automático',
    displayOptions: {
      show: {
        endpoints: ['pixUpdateAutoCharge'],
      },
    },
  },
];

