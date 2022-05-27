import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
   IonReorder, IonLabel, IonItem, IonReorderGroup, IonListHeader
  } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista dinamica</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonListHeader>Redes Sociales</IonListHeader>
        <IonReorderGroup disabled={false}>
          <IonReorder>
            <IonItem>
              <IonLabel>Youtube</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>Facebook</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>Instagram</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>WhatsApp</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>Twitter</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>TikTok</IonLabel>
            </IonItem>
          </IonReorder>
        </IonReorderGroup><br /><br />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

