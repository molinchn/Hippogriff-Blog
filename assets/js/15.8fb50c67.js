(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{433:function(s,a,n){"use strict";n.r(a);var e=n(15),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"c-11右值引用【来自ibm文档】"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#c-11右值引用【来自ibm文档】"}},[s._v("#")]),s._v(" C++11右值引用【来自IBM文档】")]),s._v(" "),n("p",[s._v("感觉本文对右值引用的讲解非常清晰易懂，因为IBM好像在整合类似的文档，原文没了，非常可惜。因此从百度快照中摘录，并重排到此。")]),s._v(" "),n("p",[s._v("原文的作者是李胜利先生，发布于2013年7月10日，原文链接（已无法访问）：https://www.ibm.com/developerworks/cn/aix/library/1307_lisl_c11/index.html")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/molinchn/BlogImage/raw/master/img/image-20210320200429288.png",alt:"百度快照截图"}})]),s._v(" "),n("h2",{attrs:{id:"新特性的目的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新特性的目的"}},[s._v("#")]),s._v(" 新特性的目的")]),s._v(" "),n("p",[n("strong",[s._v("右值引用")]),s._v(" (Rvalue Referene) 是 C++ 新标准 (C++11, 11 代表 2011 年 ) 中引入的新特性 , 它实现了转移语义 (Move Sementics) 和精确传递 (Perfect Forwarding)。它的主要目的有两个方面：")]),s._v(" "),n("ol",[n("li",[s._v("消除两个对象交互时不必要的对象拷贝，节省运算存储资源，提高效率。")]),s._v(" "),n("li",[s._v("能够更简洁明确地定义泛型函数。")])]),s._v(" "),n("h2",{attrs:{id:"左值与右值的定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#左值与右值的定义"}},[s._v("#")]),s._v(" 左值与右值的定义")]),s._v(" "),n("p",[s._v("C++( 包括 C) 中所有的表达式和变量要么是左值，要么是右值。通俗的左值的定义就是非临时对象，那些可以在多条语句中使用的对象。所有的变量都满足这个定义，在多条代码中都可以使用，都是左值。右值是指临时的对象，它们只在当前的语句中有效。请看下列示例 :")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("简单的赋值语句")]),s._v(" "),n("p",[n("code",[s._v("如：int i = 0;")])]),s._v(" "),n("p",[s._v("在这条语句中，i 是左值，0 是临时值，就是右值。在下面的代码中，i 可以被引用，0 就不可以了。立即数都是右值。")])]),s._v(" "),n("li",[n("p",[s._v("右值也可以出现在赋值表达式的左边，但是不能作为赋值的对象，因为右值只在当前语句有效，赋值没有意义。")]),s._v(" "),n("p",[s._v("如："),n("code",[s._v("((i>0) ? i : j) = 1;")])]),s._v(" "),n("p",[s._v("在这个例子中，0 作为右值出现在了”=”的左边。但是赋值对象是 i 或者 j，都是左值。")]),s._v(" "),n("p",[s._v("在 C++11 之前，右值是不能被引用的，最大限度就是用常量引用绑定一个右值，如 :")]),s._v(" "),n("p",[n("code",[s._v("const int &a = 1;")])]),s._v(" "),n("p",[s._v("在这种情况下，右值不能被修改的。但是实际上右值是可以被修改的，如 :")]),s._v(" "),n("p",[n("code",[s._v("T().set().get();")])]),s._v(" "),n("p",[s._v("T 是一个类，set 是一个函数为 T 中的一个变量赋值，get 用来取出这个变量的值。在这句中，T() 生成一个临时对象，就是右值，set() 修改了变量的值，也就修改了这个右值。")]),s._v(" "),n("p",[s._v("既然右值可以被修改，那么就可以实现"),n("strong",[s._v("右值引用")]),s._v("。"),n("strong",[s._v("右值引用")]),s._v("能够方便地解决实际工程中的问题，实现非常有吸引力的解决方案。")])])]),s._v(" "),n("h2",{attrs:{id:"左值和右值的语法符号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#左值和右值的语法符号"}},[s._v("#")]),s._v(" 左值和右值的语法符号")]),s._v(" "),n("p",[s._v("左值的声明符号为”&”， 为了和左值区分，右值的声明符号为”&&”。")]),s._v(" "),n("p",[s._v("示例程序 :")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('void process_value(int& i) {\n  std::cout << "LValue processed: " << i << std::endl;\n}\nvoid process_value(int&& i) {\n  std::cout << "RValue processed: " << i << std::endl;\n}\nint main() {\n  int a = 0;\n  process_value(a);\n  process_value(1);\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("运行结果 :")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" LValue processed: 0  \n RValue processed: 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Process_value 函数被重载，分别接受左值和右值。由输出结果可以看出，临时对象是作为右值处理的。")]),s._v(" "),n("p",[s._v("但是如果临时对象通过一个接受右值的函数传递给另一个函数时，就会变成左值，因为这个临时对象在传递过程中，变成了命名对象。")]),s._v(" "),n("p",[s._v("示例程序 :")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('void process_value(int& i) {\n  std::cout << "LValue processed: " << i << std::endl;\n}\nvoid process_value(int&& i) {\n  std::cout << "RValue processed: " << i << std::endl;\n}\nvoid forward_value(int&& i) { \n  process_value(i); \n}\nint main() {\n  int a = 0;\n  process_value(a);\n  process_value(1);\n  forward_value(2);\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("运行结果 :")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" LValue processed: 0  \n RValue processed: 1  \n LValue processed: 2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("虽然 2 这个立即数在函数 forward_value 接收时是右值，但到了 process_value 接收时，变成了左值。")]),s._v(" "),n("h2",{attrs:{id:"转移语义的定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转移语义的定义"}},[s._v("#")]),s._v(" 转移语义的定义")]),s._v(" "),n("p",[n("strong",[s._v("右值引用")]),s._v("是用来支持转移语义的。转移语义可以将资源 ( 堆，系统对象等 ) 从一个对象转移到另一个对象，这样能够减少不必要的临时对象的创建、拷贝以及销毁，能够大幅度提高 C++ 应用程序的性能。临时对象的维护 ( 创建和销毁 ) 对性能有严重影响。")]),s._v(" "),n("p",[s._v("转移语义是和拷贝语义相对的，可以类比文件的剪切与拷贝，当我们将文件从一个目录拷贝到另一个目录时，速度比剪切慢很多。")]),s._v(" "),n("p",[s._v("通过转移语义，临时对象中的资源能够转移其它的对象里。")]),s._v(" "),n("p",[s._v("在现有的 C++ 机制中，我们可以定义拷贝构造函数和赋值函数。要实现转移语义，需要定义转移构造函数，还可以定义转移赋值操作符。对于右值的拷贝和赋值会调用转移构造函数和转移赋值操作符。如果转移构造函数和转移拷贝操作符没有定义，那么就遵循现有的机制，拷贝构造函数和赋值操作符会被调用。")]),s._v(" "),n("p",[s._v("普通的函数和操作符也可以利用"),n("strong",[s._v("右值引用")]),s._v("操作符实现转移语义。")]),s._v(" "),n("h2",{attrs:{id:"实现转移构造函数和转移赋值函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现转移构造函数和转移赋值函数"}},[s._v("#")]),s._v(" 实现转移构造函数和转移赋值函数")]),s._v(" "),n("p",[s._v("以一个简单的 string 类为示例，实现拷贝构造函数和拷贝赋值操作符。")]),s._v(" "),n("p",[s._v("示例程序 :")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('class MyString {\n private:\n  char* _data;\n  size_t _len;\n  void _init_data(const char* s) {\n    _data = new char[_len + 1];\n    memcpy(_data, s, _len);\n    _data[_len] = \'\\0\';\n  }\n public:\n  MyString() {\n    _data = NULL;\n    _len = 0;\n  }\n  MyString(const char* p) {\n    _len = strlen(p);\n    _init_data(p);\n  }\n  MyString(const MyString& str) {\n    _len = str._len;\n    _init_data(str._data);\n    std::cout << "Copy Constructor is called! source: " << str._data\n              << std::endl;\n  }\n  MyString& operator=(const MyString& str) {\n    if (this != &str) {\n      _len = str._len;\n      _init_data(str._data);\n    }\n    std::cout << "Copy Assignment is called! source: " << str._data\n              << std::endl;\n    return *this;\n  }\n  virtual ~MyString() {\n    if (_data) free(_data);\n  }\n};\nint main() {\n  MyString a;\n  a = MyString("Hello");\n  std::vector<MyString> vec;\n  vec.push_back(MyString("World"));\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br")])]),n("p",[s._v("运行结果 :")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" Copy Assignment is called! source: Hello  \n Copy Constructor is called! source: World\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("这个 string 类已经基本满足我们演示的需要。在 main 函数中，实现了调用拷贝构造函数的操作和拷贝赋值操作符的操作。**MyString(“Hello”) 和 MyString(“World”) 都是临时对象，也就是右值。虽然它们是临时的，但程序仍然调用了拷贝构造和拷贝赋值，造成了没有意义的资源申请和释放的操作。如果能够直接使用临时对象已经申请的资源，既能节省资源，有能节省资源申请和释放的时间。**这正是定义转移语义的目的。")]),s._v(" "),n("p",[s._v("我们先定义转移构造函数。")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('MyString(MyString&& str) {\n  std::cout << "Move Constructor is called! source: " << str._data << std::endl;\n  _len = str._len;\n  _data = str._data;\n  str._len = 0;\n  str._data = NULL;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("和拷贝构造函数类似，有几点需要注意：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("参数（右值）的符号必须是"),n("strong",[s._v("右值引用")]),s._v("符号，即“&&”。")])]),s._v(" "),n("li",[n("p",[s._v("参数（右值）不可以是常量，因为我们需要修改右值。")])]),s._v(" "),n("li",[n("p",[s._v("参数（右值）的资源链接和标记必须修改。否则，右值的析构函数就会释放资源。转移到新对象的资源也就无效了。")])])]),s._v(" "),n("p",[s._v("现在我们定义转移赋值操作符。")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('MyString& operator=(MyString&& str) {\n  std::cout << "Move Assignment is called! source: " << str._data << std::endl;\n  if (this != &str) {\n    _len = str._len;\n    _data = str._data;\n    str._len = 0;\n    str._data = NULL;\n  }\n  return *this;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("这里需要注意的问题和转移构造函数是一样的。")]),s._v(" "),n("p",[s._v("增加了转移构造函数和转移复制操作符后，我们的程序运行结果为 :")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" Move Assignment is called! source: Hello  \n Move Constructor is called! source: World\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("由此看出，编译器区分了左值和右值，对右值调用了转移构造函数和转移赋值操作符。节省了资源，提高了程序运行的效率。")]),s._v(" "),n("p",[s._v("有了"),n("strong",[s._v("右值引用")]),s._v("和转移语义，我们在设计和实现类时，对于需要动态申请大量资源的类，应该设计转移构造函数和转移赋值函数，以提高应用程序的效率。")]),s._v(" "),n("h2",{attrs:{id:"标准库函数-std-move"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标准库函数-std-move"}},[s._v("#")]),s._v(" 标准库函数 std::move")]),s._v(" "),n("p",[s._v("既然编译器只对"),n("strong",[s._v("右值引用")]),s._v("才能调用转移构造函数和转移赋值函数，而所有命名对象都只能是左值引用，如果已知一个命名对象不再被使用而想对它调用转移构造函数和转移赋值函数，也就是把一个左值引用当做"),n("strong",[s._v("右值引用")]),s._v("来使用，怎么做呢？标准库提供了函数 std::move，这个函数以非常简单的方式将左值引用转换为"),n("strong",[s._v("右值引用")]),s._v("。")]),s._v(" "),n("p",[s._v("示例程序 :")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('void ProcessValue(int& i) {\n  std::cout << "LValue processed: " << i << std::endl;\n}\nvoid ProcessValue(int&& i) {\n  std::cout << "RValue processed: " << i << std::endl;\n}\nint main() {\n  int a = 0;\n  ProcessValue(a);\n  ProcessValue(std::move(a));\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("运行结果 :")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" LValue processed: 0  \n RValue processed: 0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("code",[s._v("std::move")]),s._v("在提高 swap 函数的的性能上非常有帮助，一般来说，"),n("code",[s._v("swap")]),s._v("函数的通用定义如下：")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("template <class T>\nswap(T& a, T& b) {\n  T tmp(a);  // copy a to tmp\n  a = b;     // copy b to a\n  b = tmp;   // copy tmp to b\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("有了 std::move，swap 函数的定义变为 :")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("template <class T>\nswap(T& a, T& b) {\n  T tmp(std::move(a));  // move a to tmp\n  a = std::move(b);     // move b to a\n  b = std::move(tmp);   // move tmp to b\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("通过 std::move，一个简单的 swap 函数就避免了 3 次不必要的拷贝操作。")]),s._v(" "),n("h2",{attrs:{id:"精确传递-perfect-forwarding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#精确传递-perfect-forwarding"}},[s._v("#")]),s._v(" 精确传递 (Perfect Forwarding)")]),s._v(" "),n("p",[s._v("本文采用精确传递表达这个意思。”Perfect Forwarding”也被翻译成完美转发，精准转发等，说的都是一个意思。")]),s._v(" "),n("p",[s._v("精确传递适用于这样的场景：需要将一组参数原封不动的传递给另一个函数。")]),s._v(" "),n("p",[s._v("“原封不动”不仅仅是参数的值不变，在 C++ 中，除了参数值之外，还有一下两组属性：")]),s._v(" "),n("p",[s._v("左值／右值和 const/non-const。 精确传递就是在参数传递过程中，所有这些属性和参数值都不能改变。在泛型函数中，这样的需求非常普遍。")]),s._v(" "),n("p",[s._v("下面举例说明。函数 forward_value 是一个泛型函数，它将一个参数传递给另一个函数 process_value。")]),s._v(" "),n("p",[s._v("forward_value 的定义为：")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("template <typename T>\nvoid forward_value(const T& val) {\n  process_value(val);\n}\ntemplate <typename T>\nvoid forward_value(T& val) {\n  process_value(val);\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("函数 forward_value 为每一个参数必须重载两种类型，T& 和 const T&，否则，下面四种不同类型参数的调用中就不能同时满足  :")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("int a = 0;\nconst int &b = 1;\nforward_value(a);  // int&\nforward_value(b);  // const int&\nforward_value(2);  // int&\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("对于一个参数就要重载两次，也就是函数重载的次数和参数的个数是一个正比的关系。这个函数的定义次数对于程序员来说，是非常低效的。我们看看"),n("strong",[s._v("右值引用")]),s._v("如何帮助我们解决这个问题  :")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("template <typename T>\nvoid forward_value(T&& val) {\n  process_value(val);\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("只需要定义一次，接受一个"),n("strong",[s._v("右值引用")]),s._v("的参数，就能够将所有的参数类型原封不动的传递给目标函数。四种不用类型参数的调用都能满足，参数的左右值属性和 const/non-cosnt 属性完全传递给目标函数 process_value。这个解决方案不是简洁优雅吗？")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("int a = 0;\nconst int &b = 1;\nforward_value(a);  // int&\nforward_value(b);  // const int&\nforward_value(2);  // int&&\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("C++11 中定义的 T&& 的推导规则为：")]),s._v(" "),n("p",[s._v("右值实参为"),n("strong",[s._v("右值引用")]),s._v("，左值实参仍然为左值引用。")]),s._v(" "),n("p",[s._v("一句话，就是参数的属性不变。这样也就完美的实现了参数的完整传递。")]),s._v(" "),n("p",[n("strong",[s._v("右值引用")]),s._v("，表面上看只是增加了一个引用符号，但它对 C++ 软件设计和类库的设计有非常大的影响。它既能简化代码，又能提高程序运行效率。每一个 C++ 软件设计师和程序员都应该理解并能够应用它。我们在设计类的时候如果有动态申请的资源，也应该设计转移构造函数和转移拷贝函数。在设计类库时，还应该考虑 std::move 的使用场景并积极使用它。")]),s._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[n("strong",[s._v("右值引用")]),s._v("和转移语义是 C++ 新标准中的一个重要特性。每一个专业的 C++ 开发人员都应该掌握并应用到实际项目中。在有机会重构代码时，也应该思考是否可以应用新也行。在使用之前，需要检查一下编译器的支持情况。")])])}),[],!1,null,null,null);a.default=t.exports}}]);