import os
import shutil
import codecs
from xpinyin import Pinyin

p = Pinyin()


# 遍历文件夹
def walkFile(dir):
    os.chdir(dir)
    length = len(dir)
    output = "d:/UED-OIS"
    for root,dirs,files in os.walk(dir):
        outPathMD = ''.join([output,'\\md\\',root[length:],"\\"])
        outPathPublic = '/'.join(''.join([output,'\\ued-ois\\',root[length:],"\\"]).split('\\'))

        outPathPublic = p.get_pinyin(outPathPublic,'') #路径转拼音
        # outPathMD = p.get_pinyin(outPathMD,'')
        #图片路径不能有中文，否则vuepress打包后会失效
        print('currPath:',root)
        if not os.path.exists(outPathMD):
            os.makedirs(outPathMD)
        if not os.path.exists(outPathPublic):
            os.makedirs(outPathPublic)

        #遍历文件
        sss = ''
        for f in files:
            filename = os.path.splitext(f)[0]
            fileext = os.path.splitext(f)[1]
            if fileext in [".jpg",".png"]:
                currFile = os.path.join(root, f)
                newFileOut = os.path.join(outPathPublic, p.get_pinyin(f,''))
                print('\n___________ Converting  jpg => md _____________________\n ',currFile)

                shutil.copyfile(currFile, newFileOut)
                sss = ''.join([sss,"## ",filename,'\n','![',filename,'](',newFileOut,')','\n\n'])

        if sss != '':
            newFileMD = os.path.join(outPathMD, 'README.md')
            # with open(newFileMD,"a") as f:
            with codecs.open(newFileMD,'a',encoding='utf-8') as f:
                f.write(sss) 
 

def main():
    walkFile("./")

if __name__ == '__main__':
    main()