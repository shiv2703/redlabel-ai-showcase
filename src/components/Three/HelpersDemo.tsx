import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper.js";
import { VertexTangentsHelper } from "three/examples/jsm/helpers/VertexTangentsHelper.js";

const HelpersDemo = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Sizes
    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    camera.position.z = 400;

    // Light
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(200, 100, 150);
    scene.add(light);

    // Light helper
    scene.add(new THREE.PointLightHelper(light, 15));

    // Grid helpers
    const gridHelper = new THREE.GridHelper(400, 40, 0x2563eb, 0x808080);
    gridHelper.position.set(-150, -150, 0);
    scene.add(gridHelper);

    const polarGridHelper = new THREE.PolarGridHelper(
      200,
      16,
      8,
      64,
      0x2563eb,
      0x808080
    );
    polarGridHelper.position.set(200, -150, 0);
    scene.add(polarGridHelper);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      `${import.meta.env.BASE_URL}models/gltf/LeePerrySmith/LeePerrySmith.glb`,
      (gltf) => {
        const mesh = gltf.scene.children[0] as THREE.Mesh;
        mesh.geometry.computeTangents?.();

        const group = new THREE.Group();
        group.scale.multiplyScalar(50);
        group.add(mesh);
        scene.add(group);

        // Helpers
        const vnh = new VertexNormalsHelper(mesh, 5);
        scene.add(vnh);

        const vth = new VertexTangentsHelper(mesh, 5);
        scene.add(vth);

        scene.add(new THREE.BoxHelper(mesh));

        // Wireframe
        const wireframe = new THREE.WireframeGeometry(mesh.geometry);
        let line = new THREE.LineSegments(wireframe);
        (line.material as THREE.LineBasicMaterial).depthTest = false;
        (line.material as THREE.LineBasicMaterial).opacity = 0.25;
        (line.material as THREE.LineBasicMaterial).transparent = true;
        line.position.x = 4;
        group.add(line);
        scene.add(new THREE.BoxHelper(line));

        // Edges
        const edges = new THREE.EdgesGeometry(mesh.geometry);
        line = new THREE.LineSegments(edges);
        (line.material as THREE.LineBasicMaterial).depthTest = false;
        (line.material as THREE.LineBasicMaterial).opacity = 0.25;
        (line.material as THREE.LineBasicMaterial).transparent = true;
        line.position.x = -4;
        group.add(line);
        scene.add(new THREE.BoxHelper(line));
      },
      undefined,
      (error) => console.error("❌ Error loading model:", error)
    );

    // Animate
    const animate = () => {
      const time = -performance.now() * 0.0003;

      camera.position.x = 400 * Math.cos(time);
      camera.position.z = 400 * Math.sin(time);
      camera.lookAt(scene.position);

      light.position.x = Math.sin(time * 1.7) * 300;
      light.position.y = Math.cos(time * 1.5) * 400;
      light.position.z = Math.cos(time * 1.3) * 300;

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

   return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

export default HelpersDemo;
