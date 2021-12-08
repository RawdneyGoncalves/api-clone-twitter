import Button from "../../components/atomic/button";
import Whitebird from "../../assets/icon/icontwitterbranco.svg";
import Bluebird from "../../components/atomic/boxtwobluebird";
import Googleicon from "../../assets/icon/icons8-google-logo.svg";
import Facebookicon from "../../assets/icon/iconmonstr-facebook-4.svg";
import Divider from "../../components/atomic/divider";
import Text from "../../components/atomic/text";
import "./style.css";
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import axios from "axios"
import { Component } from "react";

const Home = () => {
  const responseFacebook = (response) => {
    console.log(response);
  }
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="mother-box">
      <div className="box-1">
        <img className="whitebird" src={Whitebird} />
      </div>

      <div className="box-2">
        <div className="innerbox-2">
          <Bluebird></Bluebird>
          <Text title="Acontecendo agora" fontsize="64" />
          <Text title="Inscreva-se no twitter hoje mesmo." fontsize="32" />
          <GoogleLogin
            clientId="416272420598-4d0can060dgbofts5rq1g350gemuakrd.apps.googleusercontent.com"
            buttonText="inscreva-se com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle} />
          <FacebookLogin 
            appId="295428345832379"
            autoLoad={true}
            fields="name,email,picture"
            onClick={responseFacebook}
            callback={responseFacebook} />,

          <Divider />
          <Button
            backgroundColor="#0f99fa"
            color="white"
            title="inscreva-se com numero de celular"
          />
          <div className="terms">
            <Text
              title="Ao se inscrever, você concorda com os Termos de Serviço e a Política de Privacidade, incluindo o Uso de Cookies."
              fontsize="9"
              color="gray"
            />
          </div>
          <Text title="Já tem uma conta?" fontsize="15" />
          <Button title="Entrar" color="#0f99fa" />
        </div>
      </div>
    </div>
  );
};
export default Home;
