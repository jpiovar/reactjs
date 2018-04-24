package servlet;


import applayer.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author Crunchify.com
 */
@WebServlet(name = "HelloWorld")
public class HelloWorld extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println(
                "Post way\n"+
                "Name " + request.getParameter("name") +
                "Surname " + request.getParameter("surname")
        );


        request.setAttribute("firstname",request.getParameter("name"));
        request.setAttribute("lastname",request.getParameter("surname"));

        User testObj = new User();
        if(testObj.isJankoHrasko(request.getParameter("name"),request.getParameter("surname"))){
            request.getRequestDispatcher("/welcome.jsp").forward(request,response);
        } else {
            request.setAttribute("errorMessage","It is not Janko Hrasko. Try it again exactly.");
            request.getRequestDispatcher("/index.jsp").forward(request,response);
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // reading the user input
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        PrintWriter out = response.getWriter();
        out.println (
                "janko0" +
                "janko1 \n" +
                "hrasko \n" +
                "request param " + request.getParameter("htext")
        );
    }
}
