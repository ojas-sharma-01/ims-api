const express = require('express');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { URLSearchParams } = require('url');
const encodedParams = new URLSearchParams();
const readline = require('readline');
const app = express();

app.use(express.json());

const  dtt = {
  f : '',
  uid : '',
  pwd : '',
  fy : '2024-25',
  comp : 'NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY',
  logintype : 'student',
}

const Headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
    Host: 'www.imsnsit.org',
    Origin: 'https://www.imsnsit.org',
    Referer: 'https://www.imsnsit.org/imsnsit/',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36'
}

let url = 'https://www.imsnsit.org/imsnsit/';
var cookie = "";

let options = {
  method: 'GET',
  headers: Headers,
};

app.get('/proxy', async (req, res) => {
    // const url = 'https://www.imsnsit.org/imsnsit/plum_url.php?o3PzchYLzcM1KZrtbuzMy1BQraOjZPqwoY7d6tdHYTFXztPMm2HvCo9a+NAr6tJVwAViZYQERS6lwXTrm279YuLeVOzYosGUYaW62tYfXtIJA9J/oEAff+Co5kN96zMz21Z4m9kl5jj6Bp026aetUfYSlgI1KE8/HfYAxc7cMG/eRnxaya221s/MDczVfwt9K/KBZyJLyP5htsghc8ll5kP8j6lW1u+rlKb7ClbGL/3Mjyv/HmPgyMv3Kis1mjX1bF6anCxKLg2Z34DnH3ldLg==';
    
    // const formData = new URLSearchParams({
    //     year: '2023-24',
    //     enc_year: '2EO2jsJ8ufJrLb4BlFLfmS6v+GRoVqQKu8IRni3+mHPI96vClV2dLWcBZpUFti/YndzP5H/3z5KFwjOaJcZblQ==',
    //     sem: '4',
    //     enc_sem: 'bzngIXTD9NKptsurOuT2uYprJ8s+eXSclGX1b2PhazVDcfyHHauhgUP/eBD9QWYu',
    //     submit: 'Submit',
    //     recentitycode: '',
    //     dept: 'ELECTRONICS AND COMMUNICATION ENGINEERING(EAST)',
    //     degree: 'B.Tech.',
    //     ename: '',
    //     ecode: ''
    // });
    
    // fetch(url, {dat
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Cookie': 'PHPSESSID=8psud0f3a1ggaoc0vqovuqkpl7',  // Adjust this if you have an actual session cookie
    //     'Origin': 'https://www.imsnsit.org',
    //     'Referer': 'https://www.imsnsit.org/imsnsit/plum_url.php?cnDrTrFncqWK3sBQ71B4iYRzXUilcgXCMJvGKffnbtCb7WKxzC6XkF5HgDGX6lLFiKze1aOsn/bujWViVEaoEBe5HntRBXqbnOffpnkQQTCPJ3wj3xRDaDjvP7IVcjq89PJ00s1LZbx73rAPejKQGqpGmwYSLcALAiJF26UWb4+vFleoedZc4Sh/BXnAxuiVmnZhqrSi7uaqtze/aVbtcmvjx+dhWP9MA9vnd3JxVEWnCBdDznqjYaFS4r9Rl34gcUciw+/JLWnwzT1fPoY1xA==',
    //     'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    //     },
    //     body : formData
    // })
    // .then((res) => {return res.text()})
    // .then(d => console.log(d))
    // .catch(e => console.log(e));

    options.headers.Cookie = "";
    const promise_site = await fetch(url, options);
    const tt = await promise_site.text();
    const dat = promise_site.headers.get('set-cookie');
    console.log(dat);
    cookie = "";

    for (let i=0 ; i<dat.length ; i++){
      if (dat[i] === ';') break;
      cookie += dat[i];
    }

    Headers.Cookie = cookie;
  
    const promise_login = await fetch(url + "student_login110.php", options);
    const data = await promise_login.text();
    
    const dom = new JSDOM(data);
    const document = dom.window.document;
    var cap = "";

    const hrand_num = document.querySelector("#HRAND_NUM").value;
    console.log(document.querySelector("#captchaimg").src);
    console.log(cookie);
    console.log(hrand_num);

    // const rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
    // const question = (query) => new Promise((resolve) => rl.question(query, resolve));

    // const answer = await question('Please enter some input: ');
    // console.log(`You entered: ${answer}`);
    // rl.close();

    // dtt.cap = answer;
    // dtt.HRAND_NUM = hrand_num;
    // const yy = new URLSearchParams(dtt).toString();
    // options.body = yy;    options.method = 'POST';
    // options.headers.Referer += "student_login.php";

    // const promise_post = await fetch('https://www.imsnsit.org/imsnsit/student_login.php', options);
    // console.log(promise_post.status);
    // const post_data = await promise_post.text();
    // // console.log(post_data)

    // const dom1 = new JSDOM(post_data);
    // const document1 = dom1.window.document;
    // const url2 = document1.querySelectorAll("table tr table a")[1].href;

    // // options.method = "GET";
    // const act_promise = await fetch(url2, options);
    // const act_data = await act_promise.text();
    
    // const dom2 = new JSDOM(act_data);
    // const document2 = dom2.window.document;
    // const url3 = document2.querySelectorAll("a")[13].href;

    // options.headers.Referer = url3;  options.method = "POST";
    // const encodedParamss = new URLSearchParams();
    // encodedParamss.set('year', '2023-24');
    // encodedParamss.set('enc_year', '2EO2jsJ8ufJrLb4BlFLfmS6v+GRoVqQKu8IRni3+mHPI96vClV2dLWcBZpUFti/YndzP5H/3z5KFwjOaJcZblQ==');
    // // encodedParamss.set('enc_year', '2EO2jsJ8ufJrLb4BlFLfmS6v+GRoVqQKu8IRni3+mHNPCVk7BPrQ1km6yauGSFjzwyoUToXmOsabT8iOiDtADx7S9PZflMde5g3GA9SxiVzX3YkS9DFASJEDcD2/E7UFwhncd4Ap6diAxIs8M/P1YTADvmcwQ+xaTRSh0GlsqtG7O7L79gJ1OVyLpRlSvQi7Q74hUZolLBxUe7L4dSPFMXOnGxZ++xasbijGk+UaFf/afnq9Sp1qhnxwMg5aiWV3++p+ruQ/5StTDLMLuKT9qA==');
    // // encodedParamss.set('enc_semreq', 'f1v9u5qxZo1XWEjtj0yJLX4PT5qnyo8hHrfVt4eiAOOt8rQ8K0MVYdHXYW6KteFm')
    // encodedParamss.set('sem', '3');
    // // encodedParamss.set('semreq', '3');
    // encodedParamss.set('enc_sem', 'bzngIXTD9NKptsurOuT2uYprJ8s+eXSclGX1b2PhazVDcfyHHauhgUP/eBD9QWYu');
    // // encodedParamss.set('submit', 'Go');
    // encodedParamss.set('submit', 'Submit');
    // encodedParamss.set('recentitycode', '2022UEA6517');
    // encodedParamss.set('dept', 'ELECTRONICS AND COMMUNICATION ENGINEERING(EAST)');
    // encodedParamss.set('degree', 'B.Tech.');
    // encodedParamss.set('ename', '');
    // encodedParamss.set('ecode', '');
    // options.body = encodedParamss;
    // // options.remve('body');
    // const fin_promise = await fetch(url3, options);
    // const fin_data = await fin_promise.text();
    // const dom3 = new JSDOM(fin_data);
    // const document3 = dom3.window.document;
    // console.log(fin_data);
    // console.log(fin_data);
    res.send({hrand_num : hrand_num, cookie, cookie, cap : document.querySelector("#captchaimg").src})
  });

app.get("/login", async(req, res) => {
    // const rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
    // const question = (query) => new Promise((resolve) => rl.question(query, resolve));

    // const answer = await question('Please enter some input: ');
    // console.log(`You entered: ${answer}`);
    // rl.close();
    console.log(req.body);
    dtt.pwd = req.body.pwd;
    dtt.uid = req.body.uid;
    dtt.cap = req.query.cap;
    dtt.HRAND_NUM = req.query.hrand_num;
    options.headers.Cookie = req.query.cookie;
    const yy = new URLSearchParams(dtt).toString();
    options.body = yy;    options.method = 'POST';
    options.headers.Referer += "student_login.php";
    console.log(options);


    const promise_post = await fetch('https://www.imsnsit.org/imsnsit/student_login.php', options);
    console.log(promise_post.status);
    const post_data = await promise_post.text();
    // console.log(post_data)

    const dom1 = new JSDOM(post_data);
    const document1 = dom1.window.document;
    const url2 = document1.querySelectorAll("table tr table a")[1].href;

    // options.method = "GET";
    const act_promise = await fetch(url2, options);
    const act_data = await act_promise.text();
    
    const dom2 = new JSDOM(act_data);
    const document2 = dom2.window.document;
    const url3 = document2.querySelectorAll("a")[13].href;

    options.headers.Referer = url3;  options.method = "POST";
    const encodedParamss = new URLSearchParams();
    encodedParamss.set('year', '2023-24');
    encodedParamss.set('enc_year', '2EO2jsJ8ufJrLb4BlFLfmS6v+GRoVqQKu8IRni3+mHPI96vClV2dLWcBZpUFti/YndzP5H/3z5KFwjOaJcZblQ==');
    // encodedParamss.set('enc_year', '2EO2jsJ8ufJrLb4BlFLfmS6v+GRoVqQKu8IRni3+mHNPCVk7BPrQ1km6yauGSFjzwyoUToXmOsabT8iOiDtADx7S9PZflMde5g3GA9SxiVzX3YkS9DFASJEDcD2/E7UFwhncd4Ap6diAxIs8M/P1YTADvmcwQ+xaTRSh0GlsqtG7O7L79gJ1OVyLpRlSvQi7Q74hUZolLBxUe7L4dSPFMXOnGxZ++xasbijGk+UaFf/afnq9Sp1qhnxwMg5aiWV3++p+ruQ/5StTDLMLuKT9qA==');
    // encodedParamss.set('enc_semreq', 'f1v9u5qxZo1XWEjtj0yJLX4PT5qnyo8hHrfVt4eiAOOt8rQ8K0MVYdHXYW6KteFm')
    encodedParamss.set('sem', '3');
    // encodedParamss.set('semreq', '3');
    encodedParamss.set('enc_sem', 'bzngIXTD9NKptsurOuT2uYprJ8s+eXSclGX1b2PhazVDcfyHHauhgUP/eBD9QWYu');
    // encodedParamss.set('submit', 'Go');
    encodedParamss.set('submit', 'Submit');
    encodedParamss.set('recentitycode', req.body.uid);
    encodedParamss.set('dept', 'ELECTRONICS AND COMMUNICATION ENGINEERING(EAST)');
    encodedParamss.set('degree', 'B.Tech.');
    encodedParamss.set('ename', '');
    encodedParamss.set('ecode', '');
    options.body = encodedParamss;
    // options.remve('body');
    const fin_promise = await fetch(url3, options);
    const fin_data = await fin_promise.text();
    const dom3 = new JSDOM(fin_data);
    const document3 = dom3.window.document;
    console.log(fin_data);
    res.send(fin_data);
});

app.listen(3000, () => {
    console.log('Proxy server running on http://localhost:3000');
});
