import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, 
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg} from '@ionic/react';
import { logoWindows, logoSteam, logoDiscord, logoWhatsapp } from 'ionicons/icons';
import './Tab1.css';
import ExploreContainer from '../components/ExploreContainer';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color='primary'>Cards</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
          <IonCardHeader>
            <IonImg src={logoWindows}/>
            <IonCardSubtitle>Sistema Operativo</IonCardSubtitle>
            <IonCardTitle>Windows</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Windows es un sistema operativo creado por Microsoft. Consiste en un conjunto de programas que permiten la ejecución de los recursos que tiene un ordenador. El significado del término (windows, ventanas) hace alusión a su interfaz gráfica, que presenta un modelo basado en tareas y compartimentos independientes, con sus propios menús y controles.      
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonImg src={logoWhatsapp} />
            <IonCardSubtitle>Apps</IonCardSubtitle>
            <IonCardTitle>WhatsApp</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          WhatsApp es una aplicación de chat para teléfonos móviles de última generación, los llamados smartphones. Sirve para enviar mensajes de texto y multimedia entre sus usuarios.      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonImg src={logoSteam} />
            <IonCardSubtitle>Plataforma de Videojuegos</IonCardSubtitle>
            <IonCardTitle>Steam</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Steam es un servicio de distribución digital de videojuegos y una plataforma para gamers, en la que jugar y conectar con una amplia comunidad dedicada a los videojuegos.      </IonCardContent>
        </IonCard>


        <IonCard>
          <IonCardHeader>
            <IonImg src={logoDiscord} />
            <IonCardSubtitle>Comunicación</IonCardSubtitle>
            <IonCardTitle>Discord</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Es una aplicacion de comunicación mejor usada por las personas a la hora de jugar videojuegos para comunicarse con sus compañeros.
      </IonCardContent>
        </IonCard>
    </IonContent>
    </IonPage>
  );
};

export default Tab1;
