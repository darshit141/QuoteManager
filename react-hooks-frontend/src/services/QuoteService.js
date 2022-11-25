import axios from 'axios'

const QUOTE_BASE_REST_API_URL = 'http://localhost:8088/add';

class QuoteService{

    getAllQuotes(){
        return axios.get(QUOTE_BASE_REST_API_URL)
    }

    createQuote(Quote){
        return axios.post(QUOTE_BASE_REST_API_URL, Quote)
    }

    getQuoteById(id){
        return axios.get(QUOTE_BASE_REST_API_URL + '/' +id);
    }

    updateQuote(id, quote){
        return axios.put(QUOTE_BASE_REST_API_URL+'/'+id, quote);
    }

    deleteQuote(id){
        return axios.delete(QUOTE_BASE_REST_API_URL + '/' + id);
    }
}

export default new QuoteService();