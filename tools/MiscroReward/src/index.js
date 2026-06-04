const main = () => {
    const iframe = document.getElementById('msBingFrame');
    let counter = 0;
    let intervalId;
  

    const generateRandomEnglishString = () => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      const length = Math.floor(Math.random() * 10) + 1;
      let result = '';
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const randomChar = alphabet.charAt(randomIndex);
        result += randomChar;
      }
    
      return result;
    }

    const randomText = () => {
      let arr = []

      const length = Math.floor(Math.random() * 10) + 1;

      for (let i = 0; i < length; i++) {
          const unicode = Math.floor(Math.random() * (40869 - 19968)) + 19968;
          arr.push(String.fromCharCode(unicode))
      }
      let chinese = arr.join("")
      return chinese 
    }

    const randomChengyu = () => {
      let source = `你来我往
      【解释】：指亲朋好友之间交往频繁。
      【出处】：明·施耐庵《水浒全传》第七十五回：“见这李虞候，张干办在宋江面前指手划脚，你来我去，都有心要杀这厮，只是碍著宋江一个
      你死我活
      【解释】：不是你死，就是我活。形容斗争非常激烈。
      【出处】：元·无名氏《度柳翠》第一折：“世俗人没来由，争长竞短，你死我活。”
      你追我赶
      【解释】：形容竞赛激烈，大家都不甘落后。
      【出处】：《新华半月刊》1960年第14期：“我们正处在一个你追我赶、飞跃向前的建设热潮中。”
      你兄我弟
      【解释】：双方以兄弟相称，形容关系密切。
      【出处】：清·蒲松龄《东郭外传》：“你逐日在外头呼朋唤友，你兄我弟，是没有工夫料理家务的。”
      你倡我随
      【解释】：倡：带头，倡导。指彼此呼应。
      【出处】：清·西周生《醒世姻缘传》第91回：“真是那狮吼之声，山鸣谷应，你倡我随。”
      你知我知
      【解释】：只有你我两人才知道这个秘密，不能对别人说。
      【出处】：明·无名氏《女姑姑》第二折：“你又青春，我又年少，则除是天知地知，你知我知，咱两个好歹要成了这亲事
      你争我夺
      【解释】：指相互争夺
      【出处】：明·冯梦龙《醒世恒言》第三卷：“这些富贵公子，你争我夺，依了张家，违了李家。”
      你怜我爱
      【解释】：指人们之间相互尊敬怜爱。
      【出处】：清·文康《儿女英雄传》第31回：“何玉凤、张金凤彼此性情相照，患难与共，那种你怜我爱的光景，不同寻常姐妹。”
      你言我语
      【解释】：言：说，讲。指人们互相议论或争论。
      【出处】：清·曹雪芹《红楼梦》第59回：“二人你言我语，一面行走，一面说笑，不觉到了柳叶渚，顺着柳堤走来。”
      你推我让
      【解释】：指双方互相谦让。
      【出处】：明·冯梦龙《醒世恒言》第二卷：“他三个兀自你推我让。”
      下一页 尾页 共计: 20 条,页次: 1/2

      财运亨通
【解释】：亨：通达，顺利。发财的运道好，赚钱很顺利。
【出处】：清·李汝珍《镜花缘》：“谁知财运亨通，飘到长人国，那酒坛竟大获其利。”
财大气粗
【解释】：①指富有财产，气派不凡。②指仗着钱财多而气势凌人。
【出处】：刘绍棠《小荷才露尖尖角》五：“花婶子的这项收入十分可观。财大气粗，盖起这座青堂瓦舍的大宅院
财取为用
【解释】：财：通“裁”。裁度取用。
【出处】：《汉书•窦婴传》：“所赐金，陈廊庑下，军吏过，辄令财取为用。”
财不露白
【解释】：露：显露；白：银子的代称。旧指有钱财不能泄露给别人看。现指随身携带的钱财不在人前显露。
【出处】：明·海瑞《驿传议·无策》：“使客谓有此官银也，廪粮夫马
财迷心窍
【解释】：指由于一心爱财而心中糊涂。
【出处】：孙犁《秀露集·耕堂读书记（三）》：“如果当时这位作者，明达冷静一些，不财迷心窍，天下原可以平安无事的。”
财匮力绌
【解释】：指钱财缺乏，力量不足。
【出处】：《明史·赵炳然传》：“浙罹兵燹久，又当宗宪汰侈后，财匮力绌。”
财殚力竭
【解释】：钱财和力量全部用尽。比喻生活陷入困窘的境地。
【出处】：《晋书·刘毅传》：“自桓玄以来，驱蹙残败，至乃男不被养，女无匹对，逃亡去就，不避幽深，自非财殚力
财殚力痡
【解释】：殚：竭尽；痡：过度疲劳。钱财枯竭，民力疲困。
【出处】：唐·李华《吊古战场文》：“汉倾天下，财殚力痡。”
财殚力尽
【解释】：钱财和力量全部用尽。比喻生活陷入困窘的境地。
【出处】：《辛雄传》：“当今天下黔黎，久经寇贼……财殚力尽，无以卒岁。”
财多命殆
【解释】：殆：危险。钱财多了，易招致盗贼，生命就有危险。
【出处】：《后汉书•冯衍传》：“况今位尊身危，财多命殆，鄙人知之，何疑君子。”
下一页 尾页 共计: 11 条,页次: 1/2

怒发冲冠
【解释】：指愤怒得头发直竖，顶着帽子。形容极端愤怒。
【出处】：《庄子·盗跖》：“盗跖闻之大怒，目如明星，发上指冠。”《史记·廉颇蔺相如列传》：“相如因持璧却立倚
毫发不爽
【解释】：毫：细毛；发：头发；爽：差错。形容一点不差。
【出处】：宋·朱熹《朱子语类》卷十四：“便是心中许多道理，光明鉴照，毫发不差。”
先发制人
【解释】：发：开始行动；制：控制，制服。原指丢动手的牌主动地位，可以控制对方。后也泛指争取主动，先动手来制服对方。
【出处】：《汉书·项籍传》：“先发制人，后发制
毫发无憾
【解释】：毫发：细毛和头发，指极微小的数量；憾：心感不足，不满意。一点令人感到遗憾的地方也没有。形容非常完美。
【出处】：唐·杜甫《敬赠郑谏议十韵》：“思飘云物外
艾发衰容
【解释】：艾：苍白色。灰白色的头发，衰老的面容
【出处】：唐·元稹《郡斋感怀见寄》：“艾发衰容惜寸辉。”
黄发垂髫
【解释】：黄发：老年人头发由白转黄；垂髫：古时单童子未冠者头发下垂。指老人与儿童。
【出处】：《诗经·鲁颂·閟宫》：“黄发台背。”晋·潘岳《藉田赋》：“垂髫总发。
擢发难数
【解释】：擢：拔。拔下全部头发，难以数清。形容罪行多得数不清。
【出处】：《史记·范睢蔡泽列传》：“擢贾之发以续贾之罪，尚未足。”
长发其祥
【解释】：简称发祥。经常有吉祥发达的事情降临。后用为事业发达的吉利话。
【出处】：《诗经•商颂·长发》：“濬哲惟商，长发其祥。”
披发左衽
【解释】：左衽：衣襟向左掩。披头散发，衣襟左开，借指异族入侵为主。
【出处】：先秦·孔子《论语·宪问》：“微管仲，吾其被发左衽矣。”
奋发图强
【解释】：图：谋求。振作精神，以求强盛。
【出处】：郭沫若《科学的春天》：“我祝愿中年一代的科学工作者奋发图强，革命加拼命，勇攀世界科学高峰。”
下一页 尾页 共计: 135 条,页次: 1/14

      `;

      // 去除空格和换行符
      let str = source.replace(/\s+/g, "");
      // 按长度分割成数组（每个item 长度也是随机生成的）
      let arrSplitLength = Math.floor(Math.random() * 10) + 1;
      // let arr = str.match(/.{1,3}/g);
      let arr = str.match(new RegExp('.{1,' + arrSplitLength + '}', 'g'));

      // 随机取一个
      let randomIndex = Math.floor(Math.random() * arr.length);
      let randomItem = arr[randomIndex];
      return randomItem
    }
    
  
    const func = () => {
      // 两种模式 随机取一种
      const mode = Math.floor(Math.random() * 2);
      
      let searchString = ''
      if (mode === 0) {
        searchString = randomText() + generateRandomEnglishString();
      }else if (mode === 1) {
        searchString = randomChengyu();
      } else {
        searchString = generateRandomEnglishString();
      }
      

      iframe.src = `https://cn.bing.com/search?q=${searchString}`;
      counter++;
      console.log('counter', counter);
        //  id = runTimes 设置 显示次数

        document.getElementById('runTimes').innerHTML = counter
        

      // browser
      // 150 / 5 = 30 // search in bing
      // 20 / 5 = 4   // search via bing
      // mobile
      // 100 / 5 = 20
      if (counter === 30) {
        clearInterval(intervalId);
        alert("30次运行完了，自己切换模式呗")
      }
    }
  
    // 随机生成1~3的2位小数
    const randomNum = (Math.random() * 5) + 1 
    randomNum.toFixed(2)
    // 转为float
    const randomNumFloat = parseFloat(randomNum)
    
    console.log('randomNumFloat', randomNumFloat)
  
    intervalId = setInterval(func, randomNumFloat * 1000);
    
  
  }
  
  main();
  