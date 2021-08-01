---
title: spring
date: 2021-06-18 22:38:53
permalink: /pages/470ecc/
categories:
  - Java
tags:
  - 
---
# Spring框架

本文作为我学习并使用Spring的知识梳理。



## Spring的介绍



## 2. IoC容器

### 2.1 IoC是什么意思

IoC，即Inversion of Control的简称。指的是控制反转。

关于这一部分的讲解：https://www.liaoxuefeng.com/wiki/1252599548343744/1282381977747489

在过往的语言使用中，我们通常是由开发者首先知道我要创建什么对象，然后去构造它。在构造的过程中会不断有这个对象所依赖的对象，我们又要构造这个依赖。这样下去，依赖，依赖的依赖，依赖的……（禁止套娃）。这就存在了严重的问题，甚至导致程序没法写下去。

这个时候，IoC解决了「开发者控制对象」这件事。Spring利用「IoC容器」来控制对象，而不再是开发者，这就是「控制反转」的大体意思。



### 2.2 IoC容器是什么

IoC容器就是Spring的主体。

这里借用[这里]()的一段话对容器进行描述。

> 什么是容器？容器是一种为某种特定组件的运行提供必要支持的一个软件环境。例如，Tomcat就是一个Servlet容器，它可以为Servlet的运行提供运行环境。类似Docker这样的软件也是一个容器，它提供了必要的Linux环境以便运行一个特定的Linux进程。
>
> 通常来说，使用容器运行组件，除了提供一个组件运行环境之外，容器还提供了许多底层服务。例如，Servlet容器底层实现了TCP连接，解析HTTP协议等非常复杂的服务，如果没有容器来提供这些服务，我们就无法编写像Servlet这样代码简单，功能强大的组件。早期的JavaEE服务器提供的EJB容器最重要的功能就是通过声明式事务服务，使得EJB组件的开发人员不必自己编写冗长的事务处理代码，所以极大地简化了事务处理。
>
> Spring的核心就是提供了一个IoC容器，**它可以管理所有轻量级的JavaBean组件，提供的底层服务包括组件的生命周期管理、配置和组装服务**、AOP支持，以及建立在AOP基础上的声明式事务服务等。





另外要说一下什么是Bean，摘自：https://www.awaimai.com/2596.html

> 在 Spring 中，构成应用程序**主干**并由**Spring IoC容器**管理的**对象**称为**bean**。bean是一个由Spring IoC容器实例化、组装和管理的对象。

概念简单明了，我们提取处关键的信息：

1. bean是对象，一个或者多个不限定
2. bean由Spring中一个叫IoC的东西管理
3. 我们的应用程序由一个个bean构成

### 2.3 使用xml配置文件控制装配



### 2.4 更简单的装配方式：使用注解



### 2.5 与IoC容器相关的常见注解整理

#### @Component

定义了一个Bean，它有一个可选的名称，默认是小写开头的类名。

#### @Autowired

自动装配。

`@Autowired`就相当于把指定类型的Bean注入到指定的字段中。

如果写成这样：

```java
@Autowired(required = false)
```

那么这个类如果没有对应的Bean也不会报错。否则会报NoSuchBeanDefinitionException的异常。

#### @Value

用于基本类型



#### @Configuration

修饰一个类，说明这个class是一个配置类。

【什么是配置类】我的理解就是存在main方法的那个主类。

#### @ComponentScan

这个注解很重要，它告诉容器，自动搜索**当前类所在的包**以及**子包**，把所有标注为`@Component`的Bean自动创建出来，并根据`@Autowired`进行装配。

到此为止，注解可以完成基本工作了，我们只要保证：

- 每个Bean被标注为`@Component`并正确使用`@Autowired`注入；
- 配置类被标注为`@Configuration`和`@ComponentScan`；
- 所有Bean均在指定包以及子包内。

使用`@ComponentScan`非常方便，**但是，我们也要特别注意包的层次结构**。通常来说，**启动配置`AppConfig`位于自定义的顶层包（例如`com.itranswarp.learnjava`），其他Bean按类别放入子包。**



其他的重要注解有：

#### @Scope

当一个类被直接作为Component时，它只会被创建一次。每次getbean都是调用同一个类。若不想这样，就要使用：

```java
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
```

这样可以使得每次调用时创建不同的对象。



#### @Bean

用来声明标注一个「方法」，这个方法只会被调用一次。

通常用来创建第三方的Bean。

参考：https://www.liaoxuefeng.com/wiki/1252599548343744/1308043627200545



#### @PostConstruct

初始化



#### @PreDestroy

销毁



#### @Qualifier

可以用`@Bean("name")`指定别名，也可以用`@Bean`+`@Qualifier("name")`指定别名。



#### @Primary

如果没有指出Bean的名字，Spring会注入标记有`@Primary`的Bean。这种方式也很常用。例如，对于主从两个数据源，通常将主数据源定义为`@Primary`



#### @PropertySource

自动读取配置文件



#### @Profile

控制条件装配，例如分离开发，测试，生产环境。

`@Profile("test")`表示test环境

`@Profile("!test")`表示非test环境。

在运行程序时，加上JVM参数`-Dspring.profiles.active=test`就可以指定以`test`环境启动。



#### @Conditional

决定是否创建某个Bean。

例如`@Conditional(OnSmtpEnvCondition.class)`表示必须满足OnSmtpEnvCondition条件时才会创建这个Bean

## 3. AOP



#### 3.x 使用AOP的步骤

虽然Spring容器内部实现AOP的逻辑比较复杂（需要使用AspectJ解析注解，并通过CGLIB实现代理类），但我们使用AOP非常简单，一共需要三步：

1. 定义执行方法，并在方法上通过AspectJ的注解告诉Spring应该在何处调用此方法；
2. 标记`@Component`和`@Aspect`；
3. 在`@Configuration`类上标注`@EnableAspectJAutoProxy`。

#### 拦截器种类及其注解

- @Before：这种拦截器**先执行拦截代码，再执行目标代码。**如果拦截器抛异常，那么目标代码就不执行了；
- @After：这种拦截器**先执行目标代码，再执行拦截器代码。**无论目标代码是否抛异常，拦截器代码都会执行；
- @AfterReturning：和@After不同的是，**只有当目标代码正常返回时，才执行拦截器代码**；
- @AfterThrowing：和@After不同的是，**只有当目标代码抛出了异常时，才执行拦截器代码**；
- @Around：能完全控制目标代码是否执行，并可以在执行前后、抛异常后执行任意拦截代码，可以说是包含了上面所有功能。

#### 3.x 与AOP相关的注解整理

#### @EnableAspectJAutoProxy + @Before和@Around

