import React from 'react';
import { Group, Span1, Span2, TextLabel } from './howmuchElements';

const HowMuch = () => {
    return (
        <Group>
        <TextLabel>
            <Span1>
            لدى في طريقك الآن أكثر من 2 مليون مستخدم و 40000 شريك
            </Span1>
            <br/>
            <Span2>
            في طريقك متاح في 25 مدينة عبر الجزائر وكندا وفرنسا والمغرب وتونس ويتوسع باستمرار.
            </Span2>
            <br/>
            <Span2>
            مهمتنا هي جعل الحياة أسهل لمواطنينا مع غرس القيم الاجتماعية
            </Span2>

        </TextLabel>
        </Group>
    )}


export default HowMuch;
