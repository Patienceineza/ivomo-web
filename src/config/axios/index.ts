import axios from 'axios';
import config from '../storage';
import { storage } from '../../core/utils';

export const PRIVATE_API = axios.create({
    baseURL: `${config.BASE_URI}/`
});