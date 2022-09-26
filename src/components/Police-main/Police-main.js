import "./police-main.css";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";

export default function Policemain() {
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
              <h5 className="according-top">Muntazam ma'lumotlar to'plami</h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                IP manzillari, brauzer tafsilotlari, vaqt belgilari va havola
                qilingan sahifalarni o'z ichiga oladi, lekin ular bilan
                cheklanmaydi. Ushbu ma'lumotlarning hech biri ushbu saytga
                tashrif buyuruvchilarni shaxsan aniqlay olmaydi. Ma'lumotlar
                muntazam boshqaruv va texnik xizmat ko'rsatish maqsadlarida
                kuzatiladi.
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
              <h5 className="according-top">Cookie fayllari va veb-mayoqlar</h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                Agar kerak bo'lsa, toplink tashrif buyuruvchiga yaxshiroq xizmat
                ko'rsatish va/yoki tashrif buyuruvchiga moslashtirilgan
                kontentni taqdim etish uchun tashrif buyuruvchilarning
                afzalliklari va tarixi haqidagi ma'lumotlarni saqlash uchun
                cookie-fayllardan foydalanadi. Reklama bo'yicha hamkorlar va
                boshqa uchinchi tomonlar reklama va boshqa foydali ma'lumotlarni
                ko'rsatish uchun saytimizga tashrif buyuruvchilarni kuzatish
                uchun cookie-fayllar, skriptlar va/yoki veb-mayoqlardan
                foydalanishlari mumkin. Bunday kuzatuv to'g'ridan-to'g'ri
                uchinchi shaxslar tomonidan o'z serverlari orqali amalga
                oshiriladi va ularning maxfiylik siyosatiga bo'ysunadi.
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
              <h5 className="according-top">Maxfiyligingizni nazorat qilish</h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                Maxfiylik bilan bog'liq muammolar mavjud bo'lsa,
                cookie-fayllarni o'chirish uchun brauzer sozlamalarini
                o'zgartirishingiz mumkinligini unutmang. Barcha saytlar uchun
                cookie-fayllarni o'chirib qo'yish tavsiya etilmaydi, chunki u
                ba'zi saytlardan foydalanishingizga xalaqit berishi mumkin. Eng
                yaxshi variant har bir sayt asosida cookie-fayllarni o'chirish
                yoki yoqishdir. Cookie-fayllarni va boshqa kuzatuv
                mexanizmlarini blokirovka qilish bo'yicha ko'rsatmalar uchun
                brauzeringiz hujjatlariga murojaat qiling.
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
              <h5 className="according-top">Bog'lanish uchun ma'lumot</h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                Ushbu maxfiylik siyosati bilan bog'liq xavotirlar yoki savollar
                qo'shimcha tushuntirishlar uchun bizning yordamchi
                xodimlarimizga yuborilishi mumkin.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
