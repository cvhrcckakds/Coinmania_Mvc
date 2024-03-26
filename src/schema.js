//yuptaki tüm fonksiyonları * ile import ettik
import * as yup from "yup";

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 6 karakter
const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$';

//validasyon şeması
//1 formdaki imputların geçerli olması için tanımladığımız yapı

//

export const schema = yup.object().shape({
  //email için zorunlulukları belirle
  email: yup
    .string()
    .email("Geçerli bir mail formatı giriniz")
    .required("Zorunlu alan"),

  //yaş için zorunlulukları belirle
  age: yup
    .number()
    .min(18, "Yaşınız 18'den küçük olamaz")
    .max(100, "Yaşınız 100'den büyük olamaz")
    .integer("Yaşınız tam sayı olmalı")
    .required("Zorunlu alan"),

    //yaş için zorunluklar
password: yup
.string()
.required("Zorunlu Alan")
.min(6, "Şifre en az 6 karakter olmalı ")
.matches(regex, "Şifreniz yeterince güçlü değil"), //şifre yukarda tanımladığımız regex kurallarına uygun mu


//şifre onay için zorunluluklar
confirmPassword: yup 
.string()
.required("Zorunlu alan")
.oneOf([yup.ref("password")], "Onay şifreniz doğru değil") //verdiğimiz dizideki veriler birbiri ile eşleşiyor mu kontrol eder
//yup.ref input alanındaki verilere erişir

});

