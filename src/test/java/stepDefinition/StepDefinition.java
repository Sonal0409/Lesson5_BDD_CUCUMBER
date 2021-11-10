package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition {
	WebDriver driver;
	
	@Given("Chrome browser opened successfully")
	public void openBrowser()
	{
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
	
	@When("I Open the application URL")
	public void openUrl() throws InterruptedException
	{
		driver.get("https://mypage.rediff.com/login/dologin");
		Thread.sleep(2000);
			
	}
	
	@Then("Validate the title of the page")
	public void validatetitle()
	{
		String expected = "Rediff MyPage Login";
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals(title,expected );
	}
	
	@And("Validate the URL of the Page")
	public void valiadteURL()
	{
		String URL = driver.getCurrentUrl();
		System.out.println(URL);
	}
	
	
	
	
	
	
	
	

}
