import { IHttpRequestOptions, IExecuteFunctions } from 'n8n-workflow';
import { pixCreateRecurrence } from '../endpoints/rec/pixCreateRecurrence';
import { pixDetailRecurrence } from '../endpoints/rec/pixDetailRecurrence';
import { pixUpdateRecurrence } from '../endpoints/rec/pixUpdateRecurrence';
import { pixListRecurrences } from '../endpoints/rec/pixListRecurrences';
import { pixCreateRecurrenceRequest } from '../endpoints/solicrec/pixCreateRecurrenceRequest';
import { pixDetailRecurrenceRequest } from '../endpoints/solicrec/pixDetailRecurrenceRequest';
import { pixUpdateRecurrenceRequest } from '../endpoints/solicrec/pixUpdateRecurrenceRequest';
import { pixCreateAutoCharge } from '../endpoints/cobr-auto/pixCreateAutoCharge';
import { pixCreateAutoChargeImmediate } from '../endpoints/cobr-auto/pixCreateAutoChargeImmediate';
import { pixUpdateAutoCharge } from '../endpoints/cobr-auto/pixUpdateAutoCharge';
import { pixDetailAutoCharge } from '../endpoints/cobr-auto/pixDetailAutoCharge';
import { pixListAutoCharges } from '../endpoints/cobr-auto/pixListAutoCharges';
import { pixRetryAutoCharge } from '../endpoints/cobr-auto/pixRetryAutoCharge';

export async function recService(
  this: IExecuteFunctions,
  endpoint: string,
  i: number,
): Promise<IHttpRequestOptions> {
  let requestOptions: IHttpRequestOptions;
  switch (endpoint) {
    // Endpoints de recorrência
    case 'pixCreateRecurrence':
      requestOptions = await pixCreateRecurrence(this, i);
      break;
    case 'pixDetailRecurrence':
      requestOptions = await pixDetailRecurrence(this, i);
      break;
    case 'pixUpdateRecurrence':
      requestOptions = await pixUpdateRecurrence(this, i);
      break;
    case 'pixListRecurrences':
      requestOptions = await pixListRecurrences(this, i);
      break;
    
    // Endpoints de solicitação de recorrência
    case 'pixCreateRecurrenceRequest':
      requestOptions = await pixCreateRecurrenceRequest(this, i);
      break;
    case 'pixDetailRecurrenceRequest':
      requestOptions = await pixDetailRecurrenceRequest(this, i);
      break;
    case 'pixUpdateRecurrenceRequest':
      requestOptions = await pixUpdateRecurrenceRequest(this, i);
      break;
    
    // Endpoints de cobranças automáticas
    case 'pixCreateAutoCharge':
      requestOptions = await pixCreateAutoCharge(this, i);
      break;
    case 'pixCreateAutoChargeImmediate':
      requestOptions = await pixCreateAutoChargeImmediate(this, i);
      break;
    case 'pixUpdateAutoCharge':
      requestOptions = await pixUpdateAutoCharge(this, i);
      break;
    case 'pixDetailAutoCharge':
      requestOptions = await pixDetailAutoCharge(this, i);
      break;
    case 'pixListAutoCharges':
      requestOptions = await pixListAutoCharges(this, i);
      break;
    case 'pixRetryAutoCharge':
      requestOptions = await pixRetryAutoCharge(this, i);
      break;

    default:
      throw new Error(`Endpoint de PIX automático '${endpoint}' não implementado`);
  }

  return requestOptions;
}

