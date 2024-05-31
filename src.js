let headersList = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "PHPSESSID=9dm7hqkge4jvoqml8jc80khsk5",
    "Host": "www.imsnsit.org",
    "Origin": "https://www.imsnsit.org",
    "Referer": "https://www.imsnsit.org/imsnsit/",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36"
   }
   
   let bodyContent = "f=&uid=2022UEA6517&pwd=qtxyal#1&HRAND_NUM=18421&fy=2024-25&comp=NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY&cap=93867&logintype=student";
   
   let response = fetch("https://www.imsnsit.org/imsnsit/student_login110.php", { 
     method: "POST",
     body: bodyContent,
     headers: headersList,
     mode: 'no-cors'
   })
   .then(res => res.text())
   .then(d => console.log(d))
   .catch(e => console.log(e));