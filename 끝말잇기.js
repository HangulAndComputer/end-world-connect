var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '바보';
document.body.append(단어);
var 입력창 = document.createElement('input');
document.body.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
document.body.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

버튼.addEventListener('click', function 콜백함수(){
    if (단어.textContent[단어.textContent.length-1] === 입력창.value[0]){
      결과창.textContent='쿵쿵따';
      단어.textContent=입력창.value;  
    } else {
      결과창.textContent='제대로 하세요'; 

    }
});
