---
title: 使用 PowerShell 自动读写 Excel 表格
date: 2019-10-06 20:07:21
updated: 2019-10-06 20:07:21
excerpt: 《论如何帮校团委在五分钟内整理完五百份招新报名表》(´・ω・`)
thumbnail: https://p.pstatp.com/origin/feed0002d001591d8fc3
thumbnail_webp: https://ae01.alicdn.com/kf/Hc1b6956aee1c485ea173d92e7b9b770fe.jpg
thumbnail_avif: https://vfile.meituan.net/mmdb/35be3a6c1f3bbbb05ebaee87a795804533105.jpg
thumbnail_color: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIADAAVgMBIQACEQEDEQH/xAA0AAABBAMBAAAAAAAAAAAAAAADBAUGBwABAggBAAIDAQEAAAAAAAAAAAAAAAQFAQIDAAb/2gAMAwEAAhADEAAAAPYWrg4npYRFBKFxI3GqIDJhFx6sLHo6ufta7BnTMyY3uN6jyhM2jjVhqaflvqBQmpbvJiwXaX7oiZ08asNXaZT6dnJXd0GzV2YW6kmdrxqw1L2uteHrMWZckZ5TDvdaTOvzqw8ImoDTlJjzUq7d2IyV95M//8QAMBAAAgEDAgQEBgEFAQAAAAAAAQIDBAURABIGEyExECJBYRQyUXGBkaEHFVJygsH/2gAIAQEAAT8AJP8AA1k+361n2H601ZTJMYDPHztm8x5BYLnG4j6aNegqEg8u5uwOAdVPMZMIV69wQOuo7vbI3lp/7rStVISpgM0avuHpg9RqpeSKJZFcAAjdlQeh1BViV2jIAcDPbuNZPt+tRsQx+2j3/A8OIrrLbqelgpSPja6oWnpyRkJnq8h9kUE6rJ1lmq5qBTF8nxFUihJJNvlBdwM9NSVFbTKFjmSZWwXWbzcw+nn7hwOx1VXi4WvhiOeouKz1IgkWCoK7Xcv5ULD/ADX11SWdpmoS8Hkq6hY1crktlgG6+rat3EVXwtWGghllqooIi9ZROQ6InMMe4MCwjfsGQ6trW6rWkuVAXEVTGfIx+X12kHsV7EeEfc/bR7/geHF13Y8aw0YbC0VsaT8z5yf0urXY5q+toK1axHoDGjvHg5bKsCgI6FCx3avFFd4KkUFDQA0FOhkaZ2BLdAdw917Y1dayO62+ioBu56VzCnGPn3pvA/YOv6cUFPXyxvLKwqaISR1tG8Y2SEkGKYbuvTbrj+026nst1q4YRHWVhQJHCAjTz/Kpf1bGuDrMOH7PQWtpudURI81VJnI50x3EeEfc/bR7/geF74NprrxMl6WrZH+BNO8W35mVtyNn6dwRrhqlvVrpqu1XGMz0KFeQA2JY89cZHdPodXq48WcQSxUUNhlt9I0pDlnPNeKL1Y9NqH+dXixwVPDVRFDHBDcrdQitiAGyoimpySjgd9pwQNX3kVjcNcT0UbPC9K5nniPLfkTKrKx/1brrhygTiC93CtraiSqpbdP8PTCRiQ06rlz/AMdtJBFTHZDGsaEZ2qMDPhH3P20e/wCB4TcdE2eOuowkNxS9xUlfSyHe/KilKOYwepDDU1NTtaUqFmlPMbcsqKWcI7ZCgY7aloYIEKpHhJ1JbrnJ1eOH79ernPcrXcIaKX4drbMkilt8Od+/Iz11HQQWnhino9xeOipYlBHTcU6EkfQ64LgipuELTOgALM9XJj1MshZ9SMC1O2CMkgZ9xn/zwj7n7aIP0PYa2t9DqbhDhymuk96NoJrFkacY3FWkPm3he27Txg2SIM8kOIlYlPnQeuOh1O0jw24qhKMO4BGPL6j31DC4DKo7sSfbU9qqKmSuicvskOIxghcFcA6sVtqLTa0tohJSndhCzHAMbHcAT9Vzg6PMmRC9NIjI4OGGfbII1tb6HUYOe2v/xAAmEQACAQMDAwQDAAAAAAAAAAABAgMABBESITEQUZEFEyJhMkFx/9oACAECAQE/AKJRAzHbuaupbu7sfVYliETDMcRY7OpA8E0oksbDSHaQxRH5McliBmrK5F3bxy8E5BH2KPS8mYOEU8CkZ5cRkgkuhz3CsGNMxZlAGU4PnFWtvDbRe3CmlNROP7R6KFNxNrGc5AoqsM8JU9qJK8bb+c0vFHpPIqTnALauRQf3JGwAMCiBnP1SfjR6RJE0p/eEPkmpgIZ2VRgGozqGoHIKrik4o9IBia4B77VchGuYlMiqXACgnGT2Feno8a3KMpAE7BPtR2pNhRr/xAAsEQACAgEDAgQEBwAAAAAAAAABAgADEQQhMRIyEyJRgQVCcZEUIzM0QYKx/9oACAEDAQE/ACxyePsIvW5CqAfYRUFV2n6vNnBOBxDSr2DNfT1H0l6Gm1k2xsRsODKiSkPJnwfSI/5tgymdweDk4Amu0NC26axEwGYqR/AJGJqBXYFpYbngj5TNa7veTYcsAAfbaVdkPJlWavhdDKceYkkeuBiJc1uissY5ZLlsP9p4jfjABvk777c5zNW3Xe7esq7IeTNJaDo109uEZWD1tyAw9Za9FWnroS02DJLsPmPA9hiUt00Fs+YIye/Vj/Jf+o0q7J83vLzYOhmwCSPsBKX7XO+IP252wfF395qO8fSVdkKtk+UxnL10knOwGIH8OvOCeeJdctldQAA8iE/UCXglhgE7SoELuJ//2Q
---

> 封面图：[Pixiv ID: 23245036 「綾あか」 by 雄塩](https://www.pixiv.net/member_illust.php?mode=medium&illust_id=76499828)
> 写完这篇去看了一下，《摇曳百合》的十周年纪念 OVA 有[资源](https://vcb-s.com/archives/11266)啦！

{%
    aplayerlite
    "ゆるゆり、てんやわんや☆"
    "七森中☆ごらく部"
    "https://fs-im-kefu.7moor-fs2.com/im/2768a390-5474-11ea-afc9-7b323e3e16c0/SovRPZ8x.m4a"
    "https://ae01.alicdn.com/kf/H83ca962d5516486bbbeed225274cb4f7I.jpg"
%}

一个前提：**只有在电脑上安装了微软的 Office 软件才能使用 PowerShell 进行自动操作**，对于 WPS Office 是无效的。

使用 PowerShell 对 Excel 表格进行操作，实际上并不是让 PowerShell 解析 `*.xlsx` 文件然后进行修改，而是在调用 Excel 的软件对文件进行操作——简单来说，就是用脚本模拟了在 Excel 里面的各种点点点。

# 打开和保存工作表

<img data-src-webp="https://ae01.alicdn.com/kf/H4ab97186a7a74d1383a7b8cfb302ae95i.jpg" data-src="https://ae01.alicdn.com/kf/H2e9c85a7602245b6aee566d7243c8e26N.png">

如图所示，打开一个 Excel 表格的时候，实际上是依次打开了以下三个东西：

1. Excel 软件本体的一个实例
2. 一个名为“工作簿 1”的工作簿（文件）
3. 工作簿名为“Sheet1”的工作表

在 PowerShell 中对应的操作是：

```powershell
# Excel软件本体
$Excel = New-Object -ComObject Excel.Application

# 新建或打开工作簿（文件）
$Workbook = $Excel.Workbooks.Add()
$Workbook = $Excel.Workbooks.Open($Path)

# 打开工作表，可以使用从1开始的序号或名称
$Sheet = $Workbook.Worksheets.Item(1)
$Sheet = $Workbook.Worksheets.Item('Sheet1')

# 新建工作簿时会默认添加一个名为Sheet1的工作表
# 也可以自己添加、重命名、删除工作表
$Sheet = $Workbook.Worksheets.Add() # 添加，新工作表的序号为1，其它工作表的序号向后顺延
$Sheet.Name = '新的工作表' # 重命名
$Sheet.Delete() # 删除，工作簿中至少要有一个工作表

# 保存工作簿
$Workbook.Save()

# 工作簿另存为
# 使用相对路径的话，根目录为“文档”文件夹
# 可以用常数指定类型，各个类型对应的常数可以参见：
# https://docs.microsoft.com/zh-CN/office/vba/api/excel.xlfileformat
$Workbook.SaveAs($Path) # 默认用xlsx格式保存
$Workbook.SaveAs($Path, 56) # 旧版Excel的xls格式
$Workbook.SaveAs($Path, 62) # 使用UTF-8编码的csv格式

# 退出Excel软件
$Excel.Quit()
```

为了便于自动化操作，可以在脚本中设定 Excel 软件的实例是否需要显示窗口（默认不显示）和警告提示框（默认显示）。“警告提示框”的典型例子是退出 Excel 时显示的“是否保存对○○的更改？”或者保存时的“是否覆盖○○？”，如果设定为不显示的话，就会默认选取“不保存”然后直接退出。

```powershell
$Excel.Visible = $false
$Excel.DisplayAlerts = $true
```

# 修改单元格

工作表中的每个单元格也是一个对象，可以直接进行赋值，也可以通过它的属性获取单元格的值。

```powershell
# 修改位于第1行第2列的单元格B1的内容
$Sheet.Cells.Item(1, 2) = 'B1单元格'

# 可以直接使用 PowerShell 中基本类型的变量
# 使用循环，将A1到A50的单元格用0-255的随机数填充
for ($i = 1; $i -le 50; $i++) {
    $Sheet.Cells.Item($i, 1) = (Get-Random -Minimum 0 -Maximum 256)
}

# 使用公式和函数
$Sheet.Cells.Item(1, 2) = '=A1+A2'
$Sheet.Cells.Item(2, 2) = '=AVERAGE(A1:A50)'

# 获取单元格内的值
$Sheet.Cells.Item(2, 2).Text

# 获取单元格内的原始公式或函数
$Sheet.Cells.Item(2, 2).Formula
```

Excel 中的单元格使用的是类似于 `A1`、`B2` 这样的坐标，字母为列，数字为行，但是使用 PowerShell 脚本进行操作时，定位单元格时就是直接用数字指定行和列了。公式和函数中使用的还是单元格坐标而不是行和列，可以使用下面的函数将行和列转换为单元格坐标：

```powershell
function Get-ExcelCellIndex([Int32]$Row, [Int32]$Column) {
    $ColumnIndex = ''
    do {
        $Column--
        $Remainder = $Column % 26
        $ColumnIndex += [Char](0x41 + $Remainder)
        $Column = ($Column - $Remainder) / 26
    } while ($Column -gt 0)
    return $ColumnIndex + $Row
}

Get-ExcelCellIndex 1 1 # 输出A1
Get-ExcelCellIndex 1 2 # 输出B1
Get-ExcelCellIndex 4 26 # 输出Z4
Get-ExcelCellIndex 5 27 # 输出AA5
```

如果需要遍历某一整行/列单元格的话，可以通过工作表的 `UsedRange` 来获取工作表的行/列数：

```powershell
# 获取行数
$Sheet.UsedRange.Rows.Count
# 获取列数
$Sheet.UsedRange.Columns.Count
```

下面的录屏是使用 PowerShell 脚本打开 Excel、在工作表中编辑数据和使用函数、最后退出的全过程。这里不隐藏 Excel 软件界面只是为了演示，**全程并没有在 Excel 软件中直接进行操作**（注意鼠标的位置）。

<video src="https://alilin-my.sharepoint.com/personal/ebolyhgj_xlu_me/_layouts/15/download.aspx?share=EU5NcUW6VO1Fh9CB5oZXX0YBGgOkEd7VLkAqXjBLuDMRTQ" poster="https://ae01.alicdn.com/kf/H9ddf7bb17b694b8aa13011c5ba589f141.jpg" controls preload="metadata"></video>

# 实例：古诗词打印稿

这个例子是瞎扯的，主要是为了展示使用 PowerShell 操作整个微软 Office 全家桶的便利性\_(:зゝ∠)\_

> 某校正在开展传统文化宣传活动，内容之一是将用 A4 纸打印的古诗词名句张贴在校园各处。为此需要收集一批古诗词名句，以及将收集到的每条名句用 Word 制作成打印稿。
>
> 为了简化例子，这里就只考虑古诗（不考虑词）的打印稿样式，如图所示：
>
> <img data-src-webp="https://ae01.alicdn.com/kf/H770e03f14dc04ab6bad18220f1f07fe0m.jpg" data-src="https://ae01.alicdn.com/kf/H96f5bf9ceebc438aaaf1ad6f68a9fdf7P.png">

## 获取古诗词

古诗词的收集并不需要去从图书馆里翻出《唐诗三百首》之类的书籍然后一个一个字地录入，在网上有现成的接口“古诗词・一言 API”，访问 [`https://api.gushi.ci/all`](https://api.gushi.ci/all) 就可以随机得到一条古诗词名句。这个接口使用 JSON 格式返回数据，示例：

```plaintext
{
    "content" : "飞来山上千寻塔，闻说鸡鸣见日升。",
    "origin" : "登飞来峰",
    "author" : "王安石",
    "category" : "古诗文-天气-太阳"
}
```

PowerShell 可以解析 JSON 数据，于是可以使用下面的代码获取一批（这里设为十条）古诗词，保存在数组 `$PoemList` 中：

```powershell
$PoemList = @()
for ($i = 0; $i -lt 10; $i++) {
    # 使用Invoke-RestMethod直接得到解析后的JSON数据
    $Poem = Invoke-RestMethod 'https://api.gushi.ci/all'
    $PoemList += $Poem
}
```

<img data-src-webp="https://ae01.alicdn.com/kf/H4b1979dc63d342e08876071b69d9cbe4O.jpg" data-src="https://ae01.alicdn.com/kf/H927a36d4e5ea4fec85d04697a1868622O.png">

## 整理古诗词，保存到 Excel 表格中

使用一个循环就可以将数组 `$PoemList` 保存古诗词保存到表格中。

```powershell
$Excel = New-Object -ComObject Excel.Application
$Workbook = $Excel.Workbooks.Add()
$Sheet = $Workbook.Worksheets.Item(1)
$Sheet.Name = '古诗词'

# 第一行用作表头
$Sheet.Cells.Item(1, 1) = '出处'
$Sheet.Cells.Item(1, 2) = '作者'
$Sheet.Cells.Item(1, 3) = '正文'

# 设定列宽
$Sheet.Columns.Item(1).ColumnWidth = 18
$Sheet.Columns.Item(2).ColumnWidth = 10
$Sheet.Columns.Item(3).ColumnWidth = 40

# 从第二行开始保存古诗词数据
$Line = 2
foreach ($Poem in $PoemList) {
    $Sheet.Cells.Item($Line, 1) = $Poem.origin
    $Sheet.Cells.Item($Line, 2) = $Poem.author
    $Sheet.Cells.Item($Line, 3) = $Poem.content
    $Line++
}

$Workbook.SaveAs('古诗词.xlsx')
$Excel.Quit()
```

<img data-src-webp="https://ae01.alicdn.com/kf/H679fa34863b24bbf943cdd710b5bc96b4.jpg" data-src="https://ae01.alicdn.com/kf/H293f3c91f4554951a7b8a50a73feca6dI.png">

## 用 Word 生成打印稿

虽然这里涉及到的是用 PowerShell 操作 Word，但是和操作 Excel 是差不多的：

```powershell
# Word软件本体
$Word = New-Object -ComObject Word.Application

# 打开文档
$Document = $Word.Documents.Open($Path)

# 另存为文档
$Document.SaveAs($Path)

# 关闭文档，但不退出Word
$Document.Close()

# 退出Word软件
$Word.Quit()
```

由于 Word 文档不像 Excel 表格可以使用单元格直接定位修改位置，所以这里使用一个**模板**来生成打印稿：模板上留下四个**用 `%` 表示的占位符**（也可以使用其它符号），分别对应古诗词正文的前半句、后半句、作者、出处。在脚本运行时**将占位符替换为对应的值**，然后以古诗词的出处作为文件名，将文档另存为。

<img data-src-webp="https://ae01.alicdn.com/kf/H0113a54b40de487ca33fd39be0549acet.jpg" data-src="https://ae01.alicdn.com/kf/H06456b60bbe546f0a45671f2dbc526efE.png">

```powershell
# 用于在Word文档中执行一次替换的函数
function Replace-WordDoc($Document, $FindText, $ReplaceText) {
    $Range = $Document.Content
    [void]$Range.Find.Execute($FindText)
    $Range.Text = $ReplaceText
}

$Excel = New-Object -ComObject Excel.Application
$Workbook = $Excel.Workbooks.Open('C:\Users\Admin\Documents\古诗词.xlsx')
$Sheet = $Workbook.Worksheets.Item('古诗词')

$Word = New-Object -ComObject Word.Application

# 读取表格中的每一行数据（表头除外），在文档中进行替换，然后另存为
for ($i = 2; $i -le $Sheet.UsedRange.Rows.Count; $i++) {
    $Origin = $Sheet.Cells.Item($i, 1).Text
    $Author = $Sheet.Cells.Item($i, 2).Text
    $Content = $Sheet.Cells.Item($i, 3).Text.Split('，。')
    $Document = $Word.Documents.Open('C:\Users\Admin\Documents\古诗词打印稿模板.docx')

    Replace-WordDoc $Document '%0%' $Content[0]
    Replace-WordDoc $Document '%1%' $Content[1]
    Replace-WordDoc $Document '%2%' $Author
    Replace-WordDoc $Document '%3%' $Origin

    $Document.SaveAs('C:\Users\Admin\Documents\古诗词打印稿\' + $Origin + '.docx')
    $Document.Close()
}

$Excel.Quit()
$Word.Quit()
```

脚本执行完成后，就可以得到批量生成的打印稿了。

<img data-src-webp="https://ae01.alicdn.com/kf/Haddcdaeee7464e6d82393da772551b166.jpg" data-src="https://ae01.alicdn.com/kf/Hc646c34229fb4283a85d11c842a2e8b9B.png">

如果把 Excel 表格中的内容以 CSV 格式保存的话，就可以使用 PowerShell 的 `Import-Csv` 命令直接读取数据，不需要在脚本中频繁调用 Excel，提高运行速度。