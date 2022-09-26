import "./service-main.css";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";

export default function Servicemain() {
  return (
    <div className="container">
      <div className="according-page">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreTwoToneIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h5 className="according-top">
                Foydalanuvchining roziligi va shartlarni qabul qilishi
              </h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                Toplink.co ("Biz" yoki "Biz") Toplink.co sayti va turli tegishli
                xizmatlarni (birgalikda "sayt") taqdim etadi, agar siz mavjud
                bo'lgan barcha shartlar, shartlar va bildirishnomalarga rioya
                qilishingiz sharti bilan sizga, foydalanuvchiga yoki bu erda
                ("Xizmat ko'rsatish shartlari") havola qilingan, shuningdek, biz
                va siz o'rtasidagi boshqa yozma shartnoma. Bundan tashqari,
                ushbu saytda ma'lum xizmatlar yoki materiallardan foydalanganda
                foydalanuvchilar ushbu Xizmat shartlariga qo'shimcha ravishda
                shartlar va shartlarni o'z ichiga olishi mumkin bo'lgan bunday
                xizmatlar yoki materiallarga nisbatan qo'llaniladigan har qanday
                joylashtirilgan qoidalarga bo'ysunadilar. Barcha bunday
                ko'rsatmalar yoki qoidalar shu bilan ushbu Xizmat shartlariga
                havola orqali kiritilgan. Biz sizni ogohlantirmasdan vaqti-vaqti
                bilan ushbu Xizmat shartlarini o'zgartirish huquqini o'zida
                saqlab qolamiz. Siz vaqti-vaqti bilan ushbu sayt va ushbu Xizmat
                shartlarini ko'rib chiqish va har qanday o'zgartirishlar bilan
                tanishib chiqish sizning mas'uliyatingiz ekanligini tan olasiz
                va rozilik bildirasiz. Bunday o'zgarishlardan so'ng ushbu
                saytdan foydalanishda davom etishingiz o'zgartirilgan Xizmat
                ko'rsatish shartlarini tan olganingizni va o'zgartirilgan Xizmat
                shartlariga rioya qilish va ularga rioya qilishga rozilik
                bildiradi.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="margin"></div>

      <div className="according-page">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreTwoToneIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              <h5 className="according-top">Xizmatlar tavsifi</h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                Biz saytlarimiz orqali turli xizmatlarni taqdim etamiz. Siz o'z
                mablag'ingiz hisobidan xizmatlardan foydalanish uchun zarur
                bo'lgan barcha jihozlarni, jumladan, kompyuter, modem va
                Internetga kirishni ta'minlash uchun javobgarsiz (shu jumladan,
                bunday kirish bilan bog'liq barcha to'lovlarni to'lash). Biz
                istalgan vaqtda sizni ogohlantirgan holda yoki bildirmasdan
                saytni, shu jumladan saytning har qanday xususiyatlarini
                o'zgartirish yoki to'xtatish huquqini o'zida saqlab qolamiz.
                Agar biz bunday huquqdan foydalansak, siz yoki uchinchi tomon
                oldida javobgar bo'lmaymiz. Ushbu saytda mavjud xizmatlarni
                kengaytiruvchi yoki yaxshilaydigan har qanday yangi xususiyatlar
                ham ushbu Xizmat shartlariga bo'ysunadi.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="margin"></div>

      <div className="according-page">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreTwoToneIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              <h5 className="according-top">Saytdan foydalanish shartlari</h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                Sizning saytdan foydalanishingiz barcha amaldagi qonunlar va
                qoidalarga bo'ysunadi va sayt orqali xabarlaringiz mazmuni uchun
                faqat siz javobgarsiz. Ushbu saytda yoki ushbu saytda siz uchun
                mavjud bo'lishi mumkin bo'lgan har qanday aloqa xizmati, chat
                xonasi, xabarlar paneli, yangiliklar guruhi, dasturiy ta'minot
                kutubxonasi yoki boshqa interaktiv xizmatga ma'lumotlarni
                joylashtirish yoki undan boshqacha tarzda foydalanish orqali siz
                yuklamasligingiz, baham ko'rmasligingiz, joylashtirmasligingizga
                rozilik bildirasiz, yoki matn, aloqa, dasturiy ta'minot,
                tasvirlar, tovushlar, ma'lumotlar yoki boshqa ma'lumotlarni o'z
                ichiga olgan har qanday tarkibni tarqatish yoki tarqatishni
                osonlashtirish. Biz saytning uchinchi tomon foydalanuvchilari
                tomonidan yuklangan yoki taqdim etilgan har qanday materialning
                mazmunini tasdiqlamaymiz va hech qanday javobgarlikni o'z
                zimmamizga olmaymiz. Biz odatda ushbu saytda yoki ushbu saytda
                mavjud bo'lishi mumkin bo'lgan aloqa xizmatlari, chat xonalari,
                xabarlar taxtasi, yangiliklar guruhlari, dasturiy ta'minot
                kutubxonalari yoki boshqa interaktiv xizmatlar foydalanuvchilari
                tomonidan joylashtirilgan kontentni oldindan ko'rib chiqmaymiz,
                kuzatmaymiz yoki tahrirlamaymiz. Biroq, biz va bizning
                agentlarimiz o'z ixtiyoriga ko'ra, bizning fikrimizcha, ushbu
                Xizmat shartlariga va saytimiz uchun foydalanuvchi
                xatti-harakatlarining boshqa qoidalariga mos kelmaydigan yoki
                zararli, nomaqbul yoki boshqa har qanday tarkibni olib tashlash
                huquqiga egamiz. noto'g'ri. Biz bunday kontentni olib
                tashlashdagi muvaffaqiyatsizlik yoki kechikish uchun javobgar
                emasmiz. Shu bilan siz bunday olib tashlashga rozilik bildirasiz
                va kontentni olib tashlashdan kelib chiqadigan har qanday
                daʼvodan voz kechasiz. Har qanday tomon ushbu saytda
                joylashtirilgan kontent har qanday patent, savdo belgisi,
                tijorat siri, mualliflik huquqi, oshkoralik huquqi yoki boshqa
                mulkiy huquqlarni buzadi deb hisoblagan taqdirda bajarilishi
                kerak bo'lgan tartiblar tavsifi uchun quyidagi
                “Materiallaringizdan foydalanish” bo'limiga qarang. Bundan
                tashqari, siz hisobingizdan boshqa hisob xavfsizligini buzish
                yoki boshqa tarmoq yoki serverga ruxsatsiz kirishga urinish
                uchun foydalana olmaysiz. Saytning barcha sohalari siz yoki
                saytning boshqa vakolatli foydalanuvchilari uchun mavjud
                bo'lmasligi mumkin. Siz hech kimning saytdan yoki boshqa shunga
                o'xshash xizmatlardan foydalanishiga va undan foydalanishiga
                aralashmasligingiz kerak. Tizimlar yoki tarmoq xavfsizligini
                buzgan foydalanuvchilar jinoiy yoki fuqarolik javobgarlikka
                tortilishi mumkin. Siz istalgan vaqtda va oʻz xohishimizga
                koʻra, aʼzoligingizni, hisob qaydnomangizni yoki saytimiz bilan
                boshqa aloqadorligingizni oldindan ogohlantirmasdan tugatishimiz
                mumkinligiga rozilik bildirasiz. yuqoridagi qoidalar. Bundan
                tashqari, biz boshqa saytlarda tizimlar yoki tarmoq xavfsizligi
                buzilishi holatlarini tekshirishda, jumladan, jinoiy
                huquqbuzarliklarda gumon qilinayotgan huquqbuzarliklarni
                tekshirishda huquqni muhofaza qilish organlari bilan hamkorlik
                qilishda to‘liq hamkorlik qilishimizni tan olasiz.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="margin"></div>

      <div className="according-page">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreTwoToneIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              <h5 className="according-top">Uch tomonlama sayt ma'lumotlari</h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                Ushbu sayt sizni Internetdagi boshqa saytlarga havola qilishi
                yoki boshqa tomonlar tomonidan taqdim etilgan ma'lumotlar,
                hujjatlar, dasturiy ta'minot, materiallar va/yoki xizmatlarga
                havolalarni o'z ichiga olishi mumkin. Ushbu saytlarda ba'zi
                odamlar nomaqbul yoki haqoratomuz deb topishi mumkin bo'lgan
                ma'lumotlar yoki materiallar bo'lishi mumkin. Ushbu boshqa
                saytlar va partiyalar bizning nazoratimiz ostida emas va biz
                bunday saytlar mazmunining to‘g‘riligi, mualliflik huquqiga
                muvofiqligi, qonuniyligi, odobliligi yoki boshqa har qanday
                jihatlari uchun javobgar emasligimizni, shuningdek, biz ushbu
                saytlardagi xatolar yoki kamchiliklar uchun javobgar
                emasligimizni tan olasiz. boshqa tomonlarga yoki ularning
                mahsulotlari va xizmatlariga har qanday havolalar. Bunday havola
                yoki ma'lumotnomaning qo'shilishi faqat qulaylik sifatida taqdim
                etiladi va biz tomonidan sayt yoki partiyani tasdiqlash yoki
                ular bilan bog'lanishni yoki ochiq yoki nazarda tutilgan har
                qanday kafolatni anglatmaydi.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
