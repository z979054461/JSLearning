import os
from win32com import client
 
def doc_to_docx(path):
    if os.path.splitext(path)[1] == ".doc":
        word = client.Dispatch('Word.Application')
        doc = word.Documents.Open(path)  # 目标路径下的文件
        doc.SaveAs(os.path.splitext(path)[0]+".docx", 16)  # 转化后路径下的文件
        doc.Close()
        word.Quit()
 
def find_file(path, ext, file_list=[]):
    dir = os.listdir(path)
    for i in dir:
        i = os.path.join(path, i)
        if os.path.isdir(i):
            find_file(i, ext, file_list)
        else:
            if ext == os.path.splitext(i)[1]:
                file_list.append(i)
    return file_list

def main():
    dir_path = "D:\OIS\Documents\D1.Requirements\\02.需求分析"#批量转换文件夹
    ext = ".doc"
    file_list = find_file(dir_path, ext)
    for file in file_list:
        doc_to_docx(file)

if __name__ == '__main__':
    main()
#python -m pip install pypiwin32

#https://files.pythonhosted.org/packages/b5/26/801bc6d99612977accac84b2d8ad06efa4a7d831c5e2813ca9baf700b646/pywin32-225-cp37-cp37m-win_amd64.whl