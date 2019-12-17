import os
from xpinyin import Pinyin

p = Pinyin()


# 遍历文件夹
def walkFile(dir):
    os.chdir(dir)
    length = len(dir)
    uuid = 111
    output = "d:/requirement"
    for root, dirs, files in os.walk(dir):

        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # currPath = ''.join([output,root[length:],"\\"])
        outPathMD = ''.join([output,'\\md\\',root[length:],"\\"])
        outPathPublic = '/'.join(''.join([output,'\\public\\',root[length:],"\\"]).split('\\'))
        outPathPublic = p.get_pinyin(outPathPublic,'') #路径转拼音
        #图片路径不能有中文，否则vuepress打包后会失效
        print('currPath:',root)
        if not os.path.exists(outPathMD):
            os.makedirs(outPathMD)

        #遍历文件
        ll = []
        
        for f in files:
            filename = os.path.splitext(f)[0]
            fileext = os.path.splitext(f)[1]
            if fileext in [".docx"]:
                currFile = os.path.join(root, f)
                print('\n___________ Converting  docx|doc => md _____________________\n ',currFile)
                
                cmd = ''.join(["pandoc -o ",outPathMD,filename,".md ",currFile," --extract=",outPathPublic,str(uuid)])

                ll.append([''.join([outPathPublic,str(uuid)])[2:],filename])
                uuid += 1
                with open(''.join([output,"/cmd.txt"]),"w") as f:
                    f.write(''.join([cmd,'\n']))
                os.system(cmd)     

        with open(''.join([output,"/output.txt"]),"w") as f:
            f.write(str(ll))
        # 遍历所有的文件夹
        for d in dirs:
            print(os.path.join(root, d))


def main():
    walkFile("./")

    # res = os.system(cmd)
    # res = os.popen(cmd)
    # output_str = res.read()   # 获得输出字符串


if __name__ == '__main__':
    main()