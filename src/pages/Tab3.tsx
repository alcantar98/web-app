import {  IonContent, IonHeader, IonSlides, IonSearchbar, IonImg, IonPage, IonSlide, IonTitle, IonToolbar, IonButton, IonToast} from '@ionic/react';
import './Tab3.css';
import { logoTwitch, logoInstagram } from 'ionicons/icons';
import { Toast } from '@capacitor/toast';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';
import React, { useState } from 'react';
import { Share } from '@capacitor/share';
import { Browser } from '@capacitor/browser';
import { ActionSheet} from '@capacitor/action-sheet';

const Tab3: React.FC = () => {

  const [searchText, setSearchText] = useState('');
  const [showToast1, setShowToast1] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Botones y Búsqueda</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <p>Busqueda</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonSlides>
          <IonSlide>
            <IonImg src={logoTwitch} />
          </IonSlide>
          <IonSlide>
            <IonImg src={logoInstagram} />
          </IonSlide>
        </IonSlides><br /><br /><br />


        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message="¡Demostracion de Toast!"
          duration={2100}
        />

        <IonButton onClick={() => setShowToast1(true)} color='warning'>Accionar Toast</IonButton>
        <IonButton onClick={() => share()} color='medium'>Compartir información</IonButton>
        <IonButton onClick={() => link() } color='primary'>Perfil de Facebook</IonButton>
        <IonButton onClick={() => sheet()} color='danger'>MenuSheet</IonButton>
        <IonButton onClick={() => bateria()} color='tertiary'>Ver estado de bateria</IonButton>
        <IonButton onClick={() => cargando()} color='secondary'>Comprobar si carga</IonButton>
        <IonButton onClick={() => wifi() } color='success'>Ver si esta conectado a Wifi</IonButton>
        <IonButton onClick={() => tipoConexion() } color='secondary'>Ver tipo de conexion</IonButton>

      </IonContent>
    </IonPage>
  );
};

async function wifi(){
  const status = await Network.getStatus();
  const dd=status.connected;
  await Toast.show({text: 'Red Wifi: '+ dd});
}


async function tipoConexion(){
  const status = await Network.getStatus();
  const dd=status.connectionType;
  await Toast.show({text: 'Tipo de conexión: '+ dd});
}

async function bateria(){
  const info = await Device.getBatteryInfo();
  const dd=info.batteryLevel;
  await Toast.show({text: 'Nivel de carga: '+ dd});
}

async function cargando(){
  const info = await Device.getBatteryInfo();
  const dd=info.isCharging;
  await Toast.show({text: 'Estado de carga: '+ dd});
}

  async function link() {
    await Browser.open({ url: 'https://www.facebook.com/ITSURGTO' });
  }


  async function share() {
    await Share.share({
      title: 'Compartiendo desde Ionic',
      text: 'Compartiendo desde una aplicación de Ionic',
      url: 'https://www.facebook.com/ITSURGTO',
      dialogTitle: 'Compartir',
    });
  }




async function sheet(){
    await ActionSheet.showActions({
      title: 'Opciones',
      message: 'Seleccione accion',
      options: [
        {
          title: 'Redes Sociales',
        },
        {
          title: 'Videojuegos',
        },
        {
          title: 'Compra en linea',
        },
      ],
    });
  };

export default Tab3;
