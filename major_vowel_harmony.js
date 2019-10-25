const isHasMajorVowelHarmony = (word) => {
  /*
  Fonksiyon değişken ismi kelime olduğu için sadece kelime kontrolü yaptım, cümle kontrolünde ise cümledeki kelimeler parçalanarak bu fonksiyona gönderilip kelime bazlı kontrol sağlanabilir.
  Kelime içindeki sesli harf sayısı kalın harf sayısına eşit ise büyük ünlü uyumuna uyar ve "true" değeri döner. 
  Veya kalın harf sayısı 0'a eşit çıkarsa tüm sesli harflerin ince olduğu anlaşılır yine sonuç "true" döner.
  Bu 2 durumun dışındaki durumlarda kelime içerisinde hem ince hem de kalın harf var olduğu anlaşılacak ve "false" return edecektir.
  */
  let hardVowels = ["a", "ı", "o", "u"];
  let vowels = ["a", "ı", "o", "u", "e", "i", "ö", "ü"];
  let letters = word.split('');

  let vowelsLength = (letters.filter(letter => vowels.indexOf(letter) >= 0)).length;
  let hardVowelsLength = (letters.filter(letter => hardVowels.indexOf(letter) >= 0)).length;

  return (vowelsLength === hardVowelsLength) || (hardVowelsLength === 0);
}

export default isHasMajorVowelHarmony;
