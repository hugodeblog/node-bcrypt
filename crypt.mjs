import { default as bcrypt } from 'bcrypt';
const saltRounds = 10;

//ハッシュを返す
async function hashpass(password) {
    let salt = await bcrypt.genSalt(saltRounds);
    let hashed = await bcrypt.hash(password, salt);
    return hashed;
}

//パスワードハッシュの比較
async function verifypass(passA, passB) {
  let pwcheck = await bcrypt.compare(passA, passB);
  return pwcheck;
}

(async () => {

  console.log('bcrypt test1 start');

  const passTest = 'abc123';
  let hashTest = await hashpass(passTest);
  console.log(`${passTest} ===> ${hashTest} :ハッシュ値が生成されました`);

  var checkValue;
  var checkResult;

  checkValue = 'abc123';
  checkResult = await verifypass(checkValue, hashTest);
  if(checkResult) {
    console.log(`${checkValue} <===> ${hashTest}　:ハッシュ的に一致します`);
  }
  else {
    console.log(`${checkValue} <===> ${hashTest}　:ハッシュ的に一致しません`);
  }

  checkValue = 'abc1234';
  checkResult = await verifypass(checkValue, hashTest);
  if(checkResult) {
    console.log(`${checkValue} <===> ${hashTest}　:ハッシュ的に一致します`);
  }
  else {
    console.log(`${checkValue} <===> ${hashTest}　:ハッシュ的に一致しません`);
  }

  console.log('bcrypt test2 start');
  // ハッシュ値は毎回違う
  let hashTest2 = await hashpass(passTest);
  console.log(`${passTest} ===> ${hashTest2} :ハッシュ値が生成されました`);

  checkValue = 'abc123';
  checkResult = await verifypass(checkValue, hashTest2);
  if(checkResult) {
    console.log(`${checkValue} <===> ${hashTest2}　:ハッシュ的に一致します`);
  }
  else {
    console.log(`${checkValue} <===> ${hashTest2}　:ハッシュ的に一致しません`);
  }

  checkValue = 'abc1234';
  checkResult = await verifypass(checkValue, hashTest2);
  if(checkResult) {
    console.log(`${checkValue} <===> ${hashTest2}　:ハッシュ的に一致します`);
  }
  else {
    console.log(`${checkValue} <===> ${hashTest2}　:ハッシュ的に一致しません`);
  }

  console.log('bcrypt test all end');

})();
