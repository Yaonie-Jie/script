#!/bin/sh

## 种豆得豆，每个互助码间使用换行来分开，首尾一对引号
ShareCodesBean="b6xxkujlkjykfriicy7emnyhbm
4npkonnsy7xi2mbgrx7s7k4kc5ibhk5m7ifbjyy
e7lhibzb3zek2y4xvo5qo6ecx76bdxtlicbyxea
e7lhibzb3zek2sukqc23c4te54w2z2ylg7p7loq"

## 东东农场，每个互助码间使用换行来分开，首尾一对引号
ShareCodesFarm="13cd7d9990544ca29195aee9d2574395
3c7658fedf724c929c9d924c433f70ae
76d3727f1c154d1baff411fbdf43fc94
78d81e320aad4add99ef2992b7c76bd8"

## 东东萌宠，每个互助码间使用换行来分开，首尾一对引号
ShareCodesPet="MTE1NDAxNzcwMDAwMDAwMzUyOTU3ODk=
MTE1NDQ5OTUwMDAwMDAwMzUxNzg5MTk=
MTE1NDQ5OTUwMDAwMDAwMzkwMzM5NzE=
MTEzMzI0OTE0NTAwMDAwMDA0MDk2NjkyNw=="

## 东东工厂，每个互助码间使用换行来分开，首尾一对引号
ShareCodesGong="P04z54XCjVWnYaS5jwBC2T423hMkgs0
P04z54XCjVWnYaS5m9cZ2f8iX0YlZU5h5Nk2Dg
P04z54XCjVWnYaS5m9cZ2StjHUZkkmwtnsRdio
P04z54XCjVWnYaS5m9cZ2T51XsblwYlhjsxmKc"

## 京喜工厂，每个互助码间使用换行来分开，首尾一对引号
ShareCodesJingxi="fhEyWnDSm2PmfOajBltZWg==
vmlNjZVbTsZ2lzeFh3tHYA==
VUFcFE8mE-y7N_33EOWn3Q==
mMgaT8eM2vngwPhSUPlm4w=="

## 如果你希望在向服务器提交互助码后反馈提交结果，请补充ServerChan的SCKEY
## 教程：http://sc.ftqq.com/3.version
SCKEY="SCU69645T751603996ddcb96a66fe98a2087d89fb5dfaf35ad83fc"


################################## 以下勿动 ##################################
## 路径
CreateURLBean="http://api.turinglabs.net/api/v1/jd/bean/create/"
CreateURLFarm="http://api.turinglabs.net/api/v1/jd/farm/create/"
CreateURLPet="http://api.turinglabs.net/api/v1/jd/pet/create/"
CreateURLGong="http://api.turinglabs.net/api/v1/jd/ddfactory/create/"
CreateURLJingxi="http://api.turinglabs.net/api/v1/jd/jxfactory/create/"
URLServerChan="https://sc.ftqq.com/"


# 提交种豆得豆互助码
function CreateCodesBean {
  echo -e "种豆得豆：\n\n" 
  for Code in ${ShareCodesBean}
  do
    sleep 2
    wget -q -O ${Code} ${CreateURLBean}${Code}
    echo -n "${Code}: "
    cat ${Code}
    echo -e "\n\n"
    rm -f ${Code}
  done
}


## 提交东东农场互助码
function CreateCodesFarm {
  echo -e "东东农场：\n\n"
  for Code in ${ShareCodesFarm}
  do
    sleep 2
    wget -q -O ${Code} ${CreateURLFarm}${Code}
    echo -n "${Code}: "
    cat ${Code}
    echo -e "\n\n"
    rm -f ${Code}
  done
}

## 提交东东萌宠互助码
function CreateCodesPet {
  echo -e "东东萌宠：\n\n"
  for Code in ${ShareCodesPet}
  do
    sleep 2
    wget -q -O ${Code} ${CreateURLPet}${Code}
    echo -n "${Code}: "
    cat ${Code}
    echo -e "\n\n"
    rm -f ${Code}
  done
}

## 提交东东工厂互助码
function CreateCodesGong {
  echo -e "东东工厂：\n\n"
  for Code in ${ShareCodesGong}
  do
    sleep 2
    wget -q -O ${Code} ${CreateURLGong}${Code}
    echo -n "${Code}: "
    cat ${Code}
    echo -e "\n\n"
    rm -f ${Code}
  done
}

## 提交京喜工厂互助码
function CreateCodesJingxi {
  echo -e "京喜工厂：\n\n"
  for Code in ${ShareCodesJingxi}
  do
    sleep 2
    wget -q -O ${Code} ${CreateURLJingxi}${Code}
    echo -n "${Code}: "
    cat ${Code}
    echo -e "\n\n"
    rm -f ${Code}
  done
}

## 向服务器提交互助码
if [ -n "${ShareCodesBean}" ]; then
  CreateCodesBean
fi

if [ -n "${ShareCodesFarm}" ]; then
  CreateCodesFarm
fi

if [ -n "${ShareCodesPet}" ]; then
  CreateCodesPet
fi

if [ -n "${ShareCodesGong}" ]; then
  CreateCodesGong
fi

if [ -n "${ShareCodesJingxi}" ]; then
  CreateCodesJingxi
fi

## 向方糖发送消息
#if [ -n "${SCKEY}" ]; then
  # desp=$(cat ${LogFile})
  # wget -q --output-document=/dev/null --post-data="text=互助码提交状态&desp=${desp}" ${URLServerChan}${SCKEY}.send
