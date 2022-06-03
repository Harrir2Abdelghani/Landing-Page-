import React from 'react';
import { AppImage, Group, OverapGroup, Span1, Span2, TextLabel } from './BlueSectionElements';
import AppImg from '../images/AppImg.png'
const BlueSection = () => {
  return (
    <Group id='BlueSection'>
        <OverapGroup>
            <AppImage src = {AppImg}/>
            <TextLabel>
                <Span1>
                تطبيق في طريقك يمنحكم رؤية جديدة للتنقل ! يوفر لكم سائقًا خاصًا بنقرة واحدة ويسمح لكم بالذهاب من نقطة إلى أخرى بكل سهولة و أريحية وبأسعار تنافسية
                </Span1>
                <br/>
                <Span2>
                للحصول على توصيلة بأسعار معقولة في غضون دقائق, بدلا من البحث عن سيارة أجرة أو إنتظار الحافلة، يمكنك طلب سيارة لتوصيلك ببضغ ضغطات ، سوف يستقبل السائق الأقرب منك الطلب ويكون عندك في لحظات و الأجمل أنه عبر هاتفك يمكنك معرفة أين هو سائقك بالضبط ومشاهدته وهو قادم إليك،بحسب طلبك يأخذك السائق إلى وجهتك على الفور .تمتع برحلة مريحة وبأسعار معقولة مع سائقين رائعييمكنكم الآن تحديد السيارة وفقًا لميزانيتكم ونوع الرحلة إنسوا مشاكل التوقف وازدحام المرور، قوموا بتحميل التطبيق وتنقلوا حيثما شئتم و متى أردتم
                </Span2>
            </TextLabel>
          
        </OverapGroup>
    </Group>

    );
};

export default BlueSection;
