import {  IonContent, IonHeader, IonSlides, IonSearchbar, IonImg, IonPage, IonSlide, IonTitle, IonToolbar, IonButton, IonToast} from '@ionic/react';
import './Tab3.css';
import { logoTwitch, logoInstagram } from 'ionicons/icons';
import { Toast } from '@capacitor/toast';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';
import React, { useState } from 'react';
import { Share } from '@capacitor/share';
import { Browser } from '@capacitor/browser';
import { ActionSheet, ActionSheetOptionStyle } from '@capacitor/action-sheet';

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
          message="¡BIENVENIDO!"
          duration={2100}
        />

        <IonButton onClick={() => setShowToast1(true)} color='warning'>Ver Toast</IonButton>
        <IonButton onClick={() => share()} color='medium'>Compartir información</IonButton>
        <IonButton onClick={() => link() } color='primary'>Mi perfil de Facebook</IonButton>
        <IonButton onClick={() => sheet()} color='danger'>MenuSheet</IonButton>
        <IonButton onClick={() => bateria()} color='success'>Ver carga de bateria</IonButton>
        <IonButton onClick={() => cargando()} color='secondary'>Ver si esta cargando</IonButton>
        <IonButton onClick={() => wifi() } color='success'>Ver si esta conectado a Wifi</IonButton>
        <IonButton onClick={() => tipoConexion() } color='secondary'>Ver tipo de conexion</IonButton>

      </IonContent>
    </IonPage>
  );
};

async function wifi(){
  const status = await Network.getStatus();
  const dd=status.connected;
  await Toast.show({text: 'wifi: '+ dd});
}


async function tipoConexion(){
  const status = await Network.getStatus();
  const dd=status.connectionType;
  await Toast.show({text: 'Tipo de conexión: '+ dd});
}

async function bateria(){
  const info = await Device.getBatteryInfo();
  const dd=info.batteryLevel;
  await Toast.show({text: 'Estatus de carga: '+ dd});
}

async function cargando(){
  const info = await Device.getBatteryInfo();
  const dd=info.isCharging;
  await Toast.show({text: 'Estatus de carga: '+ dd});
}

  async function link() {
    await Browser.open({ url: 'https://www.facebook.com/jesusTOficial' });
  }


  async function share() {
    await Share.share({
      title: 'Compartiendo desde Ionic',
      text: 'Estás compartiendo desde una aplicación de Ionic',
      url: 'https://www.facebook.com/jesusTOficial',
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
          title: 'Sistemas Operativos',
        },
      ],
    });
  };

export default Tab3;
