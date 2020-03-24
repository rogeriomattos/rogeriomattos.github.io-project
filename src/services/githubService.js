export class githubService{
    getAllRepositoriesByUserName(){
        fetch("https://api.github.com/users/rogeriomattos/repos")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                return result;
            }
        );
    }
}