
import React from 'react';
import { Groupe, Text1, Text2, TexteContainer,AppImage, Groupe2, GooglePlay, Appstore, Text3 } from './FirstSectionElements';
import appimage from '../images/appimage.png'
import googleplay from '../images/googleplay.png'
import appstore from '../images/appstore.png'


export const FirstSection = ({toggle}) => {
    return (
<>
    <Groupe id='FirstSection'>
      <TexteContainer>
          <Text1>في طريقك</Text1>
          <Text2>
          هو تطبيق سريع يسمح للمستخدمين بتجنيد سياراتهم متى ذهبوا إلى مكان ما بحيث يمكن للمستخدمين الآخرين مشاركة الرحلة إذا كانت  بنفس طريقهم
          </Text2>
      </TexteContainer>
    </Groupe>

    <Groupe2>
        <Text3>حمل التطبيق</Text3>
        <GooglePlay src={googleplay}/>
        <Appstore src={appstore}/>
    </Groupe2>
  
    <AppImage src={appimage}/>

  
  
</>
);
};