package com.app.specs;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.apache.log4j.Logger;

public class SessionProvider {

	static Logger log = Logger.getLogger(SessionProvider.class);
	static HttpSession session;
	
	//function sets a session object
	public static void setSession(HttpServletRequest request,String username) {
		try {
		session = request.getSession();
		session.setAttribute("username", username);
		}
		catch(Exception e) {
			log.error("set session exception",e);
		}
	}	
	
	//function retrieves session object
	public static String getSessionAttribute() {
		String username = null;
		try {
			username = (String) session.getAttribute("username");
			log.info(username+ " is passed");
		}
		catch(Exception e) {
			log.error("getting session exception",e);
		}
		return username;
	}
}
