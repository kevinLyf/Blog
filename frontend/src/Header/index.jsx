import {
  ButtonLogin,
  ButtonRegister,
  HeaderBar,
  Li,
  NavBar,
  Ul,
} from './style';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <HeaderBar>
        <NavBar>
          <h1>Logo</h1>
          <Ul>
            <Li>
              <ButtonLogin>Log in</ButtonLogin>
            </Li>
            <Li>
              <ButtonRegister onClick={onOpenModal}>Sign up</ButtonRegister>
            </Li>
          </Ul>
        </NavBar>
      </HeaderBar>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </>
  );
};

export default Header;
