import "./faq-main.css";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";

export default function Faqmain() {
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
                Toplinkni qanday sozlashim mumkin?
              </h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                To'g'ridan-to'g'ri Toplink profilingizdan! Toplink-ga kiring
                yoki to'g'ridan-to'g'ri shaxsiy havolangizga o'ting. Rasmingizni
                o'zgartirish, yangi havola qo'shish, boshqa tartibda ro'yxatga
                olish uchun havolalaringizni sudrab borish yoki ma'lumotingizni
                tahrirlash uchun "Tahrirlash" tugmasini bosing.
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
              <h5 className="according-top">Bu xizmat kim uchun?</h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                Rassomlar, bloggerlar, brendlar, fitnesga ta'sir qiluvchilar, it
                egalari... haqiqatan ham bir nechta ijtimoiy platformalarda
                kontentga ega bo'lgan har bir kishi. Toplink sizning
                izdoshlaringiz yaratgan narsalaringizni ko'rishni
                osonlashtiradi. Bundan tashqari, siz hech qachon “biodagi
                havola” ni o‘zgartirishingiz shart emas.
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
              <h5 className="according-top">
                Toplink nima va undan qanday foydalanishim mumkin?
              </h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                Toplink bilan hisob yaratganingizda, foydalanuvchi nomini
                tanlaysiz. Sizning shaxsiy URL manzilingiz Toplink.uz/ username
                bo'ladi . Profilingizni tugatganingizdan so'ng, Toplink
                havolasidan nusxa oling va uni istalgan ijtimoiy platformada
                o'zingizning bio-blogingizga qo'shing.
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
              <h5 className="according-top">
                Qo'llab-quvvatlash xizmatiga qanday murojaat qilishim mumkin?
              </h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="according-text">
                Mijozlarni qo'llab-quvvatlash jamoamiz sizning barcha
                savollaringizga javob berishga tayyor! Har qanday savol, sharh
                yoki tavsiyalar bilan support@toplink.uz manzili orqali biz
                bilan bog'lanishingiz mumkin .
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
