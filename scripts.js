d
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.length === 4 && password === '12345') {
        document.querySelector('.login-container').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    } else {
        alert('Invalid login credentials');
    }
});

function showVideos(subject) {
    const videoList = document.getElementById('videoList');
    videoList.innerHTML = '';

    const videos = {
        math: [
            { title: 'Algebra Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' },
            { title: 'Geometry Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' }
            { title: 'Algebra Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' },
            { title: 'Geometry Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' }
            { title: 'Algebra Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' },
            { title: 'Geometry Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' }
            { title: 'Algebra Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' },
            { title: 'Geometry Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' }
            { title: 'Algebra Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' },
            { title: 'Geometry Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' }
            { title: 'Algebra Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' },
            { title: 'Geometry Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' }
        ],
        science: [
            { title: 'Physics Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' },
            { title: 'Chemistry Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' }
            { title: 'Physics Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' },
            { title: 'Chemistry Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' }
            { title: 'Physics Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' },
            { title: 'Chemistry Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' }
            { title: 'Physics Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' },
            { title: 'Chemistry Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' }
            { title: 'Physics Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' },
            { title: 'Chemistry Basics', url: 'https://www.youtube.com/watch?v=Qf4dIN99e2w' }
        ]
    };

    videos[subject].forEach(video => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = video.url;
        a.target = '_blank';
        a.textContent = video.title;
        li.appendChild(a);
        videoList.appendChild(li);
    });

    document.getElementById('videos').classList.remove('hidden');
}
