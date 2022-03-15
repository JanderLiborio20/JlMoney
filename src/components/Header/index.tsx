import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';


interface handleModalOpen {
  onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal }: handleModalOpen) {

  return(
    <Container>
      <Content>
        <img src={logoImg} alt="Jl Money" />
        <button 
        type="button" 
        onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>


      </Content>
    </Container>
  )
}