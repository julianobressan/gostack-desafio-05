import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface ResumeTransactions {}

class GetTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(){
    const returnObj = {
      transactions: this.transactionsRepository.all(),
      balance: this.transactionsRepository.getBalance()
    };
    return returnObj;
  }
}

export default GetTransactionsService;
