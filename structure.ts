// 타입 정의
type Father = {
  beauty: string;
  smart: number;
}

type Mother = {
  brave: string;
  healthy: number;
}

type Me = {
  brave: string;
  smart: number;
};

// 객체 및 함수 선언
const father: Father = {
  beauty: "very nice",
  smart: 100,
};

const mother: Mother = {
  brave: "unbelivable",
  healthy: 100,
};

const me: Me = {
  brave: "so so",
  smart: 50,
};

function getAttr(target: any, attrName: string) {
  return target[attrName];
}

// 함수 호출
getAttr(father, "beauty");
getAttr(mother, "brave");
getAttr(me, "smart");