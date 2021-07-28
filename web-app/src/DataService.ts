import mockData from './mockData.js';
import { validateSection } from './utilities/ajv/mockDataValidator';
import { Section } from './types';

//DataService config
const config = {
    //TODO: Config to be based on environment (PROD or DEV)
    api: 'mock'
}

async function getSections(data: any) {
    await new Promise((r) => setTimeout(r, 1000*Math.random()))
    if (data.every(validateSection)) {
        return data as Section[]
    }
    throw new Error("Incorrect data passed to mockFetch")
}

async function mockFetch(url: string) {
    if (url === '/sections') {
        return await getSections(mockData.sections)
    }
}

const DataService = {
    fetch: config.api === 'mock'
        ? mockFetch : () => {throw new Error('config.api in DataService misconfigured.')}
}

export default DataService