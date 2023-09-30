//NORMAL If Statement
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

/*conditional ? operator
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
*/

//Shorthand conditional
  {isLoggedIn && <AdminPanel />}