import axios, {AxiosResponse} from 'axios';

export class SimpleService {
    public static async setFilter (): Promise<any> {
        const response: AxiosResponse<any> = await axios.post(`adress`, {
            ...{/*data*/}
        });

        return response.data;
    }
}
