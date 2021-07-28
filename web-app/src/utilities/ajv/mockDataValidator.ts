import Ajv, { JSONSchemaType } from 'ajv';
import { Section } from '../../types';

const ajv = new Ajv();

const sectionSchema: JSONSchemaType<Section> = {
    type: 'object',
    properties: {
        type: { type: 'string' },
        tabId: { type: 'string', nullable: true },
        tabContent: { type: 'string', nullable: true  }
    },
    required: ['type'],
    additionalProperties: false
}

const sectionValidator = ajv.compile(sectionSchema);

export function validateSection(sectionData: any) {
    return sectionValidator(sectionData) === true;
}
