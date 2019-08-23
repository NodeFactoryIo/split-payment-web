const apiURL = 'http://api.etherscan.io/api' ;
const API_KEY = 'HZICI8ZHVTE6HPWXWH8SESCI4ESZ1VPWKG';

export const ETH_TRANSACTIONS_URL =  apiURL + `?module=account&action=txlist&address=:address&sort=desc&apikey=${API_KEY}`;
