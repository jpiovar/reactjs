<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 20-Apr-18
  Time: 09:25
  To change this template use File | Settings | File Templates.
--%>

<%@ page import="helper.Helper"%>
<%@ page import="servlet.HelloWorld"%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%

  String[] authors = request.getParameterValues("author");


  String title = "title of app";
  String text1 = "Hello world";
  String text2 = "text2 hello";
%>
<html>
  <head>
    <title><%=title %></title>
  </head>
  <body>
  <% out.write(text1); %>
  <%= text2 %>

  <%
    Helper helper = new Helper();

    out.print("helper foo "+helper.foo(1,2));

  %>

  <h3>Choose an author:</h3>


Get Way
  <form method="get">
    <input type="checkbox" name="author" value="Tan" <% if(authors!=null && authors.length>0 && helper.isContaining(authors,"Tan")){ out.print("checked=checked"); } %> />Tan
    <input type="checkbox" name="author" value="Ali" <% if(authors!=null && authors.length>0 && helper.isContaining(authors,"Ali")){ out.print("checked=checked"); } %> />Ali
    <input type="checkbox" name="author" value="Kumar" <% if(authors!=null && authors.length>0 && helper.isContaining(authors,"Kumar")){ out.print("checked=checked"); } %> />Kumar
    <input type="submit" value="Query">
  </form>




  <%
    if (authors != null) {
  %>
  <h3>You have selected author(s):</h3>
  <ul>
    <%
      for (int i = 0; i < authors.length; ++i) {
    %>
    <li><%= authors[i] %></li>
    <%
      }
    %>
  </ul>
  <a href="<%= request.getRequestURI() %>">BACK</a>
  <%
    }
  %>


  <br/>
  <br/>
  Post Way
  <form method="post" action="/HelloWorld">
      Name <input type="text" name="name" value=""/>
      Surname <input type="text" name="surname" value=""/>
      <input type="submit" value="post">
  </form>

  <p>
    ${errorMessage}
  </p>

  </body>
</html>
