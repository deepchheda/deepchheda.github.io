
<%
			  
        String [] username = new String[3]; 
			String [] password = new String[3];
			username[0] = "sabrish";
			password[0] = "sabrish";
			username[1] = "deep";
			password[1] = "deep";
			username[2] = "yusuf";
			password[2] = "yusuf";

 

          // read user input
		  	String username1 = request.getParameter("username");  //q is the name of the parameter from AJAX call
			String password1 = request.getParameter("password");  //q is the name of the parameter from AJAX call
			String success = "false";
			for(int i=0; i<username.length; i++){
				if((username[i].equals(username1))&&(password[i].equals(password1))){
					success = "true";
					break;
				}
			}

		out.println(success);
%>