import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, 
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg} from '@ionic/react';
import { logoAmazon, logoSteam, logoPlaystation, logoTiktok } from 'ionicons/icons';
import './Tab1.css';

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
            <IonImg src={logoAmazon}/>
            <IonCardSubtitle>Tienda en linea</IonCardSubtitle>
            <IonCardTitle>Amzon</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Amazon.com, Inc. es una compañía estadounidense de comercio electrónico y servicios de computación en la nube a todos los niveles con sede en la ciudad de Seattle, Washington. Su lema es: From A to Z. Es una de las primeras grandes compañías en vender bienes a través de Internet.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonImg src={logoTiktok} />
            <IonCardSubtitle>Redes Sociales</IonCardSubtitle>
            <IonCardTitle>Tiktok</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          es una red social de origen chino para compartir videos cortos y en formato vertical propiedad de la empresa china ByteDance.​
          </IonCardContent>
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
            <IonImg src={logoPlaystation} />
            <IonCardSubtitle>Creador de consolas</IonCardSubtitle>
            <IonCardTitle>PlayStation</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Es el nombre de una serie de consolas de videojuegos creadas y desarrolladas por Sony Interactive Entertainment. Han estado presentes en la quinta, sexta, séptima, octava y novena generación de videoconsolas, la compañía promotora está actualmente en el mercado con su PlayStation 5.
      </IonCardContent>
        </IonCard>
    </IonContent>
    </IonPage>
  );
};

export default Tab1;
